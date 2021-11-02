import path from "path";

/* Remark plugins */
import remarkMath from "remark-math";
import { remarkMdxImages } from "remark-mdx-images";

/* Rehype plugins */
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";

import { bundleMDX } from "mdx-bundler";

type TransformedArticle = {
  code: string;
  tableOfContents: Record<string, any>;
};

export const getTransformedArticle = async (slug: string, content: string): Promise<TransformedArticle> => {
  const esbuildPath = path.join(process.cwd(), "node_modules", "esbuild");
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(esbuildPath, "esbuild.exe");
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(esbuildPath, "bin", "esbuild");
  }

  const imagesRelativePath = path.join("handbook", slug, "images");
  const publicPath = path.join(process.cwd(), "public", imagesRelativePath);
  const postPath = path.join(process.cwd(), "handbook", slug);
  console.log(postPath);

  let tableOfContents = null;
  const { code, errors } = await bundleMDX(content, {
    cwd: postPath,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath, remarkMdxImages];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeToc,
          {
            customizeTOC: (originalTableOfContents) => (tableOfContents = originalTableOfContents),
          },
        ],
        rehypeKatex,
      ];

      return options;
    },
    esbuildOptions: (options) => {
      // Set the `outdir` to a public location for this bundle.
      options.outdir = publicPath;
      options.loader = {
        ...options.loader,
        // Tell esbuild to use the `file` loader for pngs
        ".png": "file",
        ".gif": "file",
        ".jpg": "file",
        ".svg": "file",
      };
      // Set the public path
      options.publicPath = imagesRelativePath;

      // Set write to true so that esbuild will output the files.
      options.write = true;

      return options;
    },
  });

  console.log("errors: ", errors.shift());

  return { code, tableOfContents };
};
