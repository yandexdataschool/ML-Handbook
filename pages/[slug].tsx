import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { useMemo } from "react";

import { GetStaticPathsResult } from "next";
import Head from "next/head";

/* Remark plugins */
import remarkMath from "remark-math";
import { remarkMdxImages } from "remark-mdx-images";

/* Rehype plugins */
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";

import { getMDXComponent } from "mdx-bundler/client";

/* Components */
import { Layout } from "@/components/Layout/Layout";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Details } from "@/components/Details/Details";
import { Example } from "@/components/Example/Example";
import { ToC } from "@/components/ToC/ToC";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  details: Details,
  nav: ToC,
  Example,
};

export default function ArticlePage({ code, frontMatter }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
      <main className="container mx-auto max-w-5xl">
        <section className="prose max-w-max">
          {/*@ts-ignore*/}
          <Component components={components} />
        </section>
      </main>
    </Layout>
  );
}

export function getStaticPaths(): GetStaticPathsResult {
  return {
    paths: [
      {
        params: {
          slug: "intro",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (process.platform === "win32") {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "esbuild.exe");
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "bin", "esbuild");
  }

  const imagesRelativePath = path.join("images");
  const publicPath = path.join(process.cwd(), "public", imagesRelativePath);
  const postPath = path.join(process.cwd(), "handbook", "intro");
  const postFilePath = path.join(postPath, "_test.mdx");
  const source = fs.readFileSync(postFilePath);

  const { content, data: frontMatter } = matter(source);
  const { bundleMDX } = await import("mdx-bundler");

  const { code } = await bundleMDX(content, {
    cwd: postPath,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath, remarkMdxImages];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeSlug, rehypeToc, rehypeKatex];

      return options;
    },
    esbuildOptions: (options) => {
      // Set the `outdir` to a public location for this bundle.
      options.outdir = publicPath;
      options.loader = {
        ...options.loader,
        // Tell esbuild to use the `file` loader for pngs
        ".png": "file",
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

  return {
    props: { code, frontMatter },
  };
}
