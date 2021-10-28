import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { useMemo } from "react";

import { GetStaticPathsResult } from "next";
import Head from "next/head";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { remarkMdxImages } from "remark-mdx-images";

import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";

import { Layout } from "@/components/Layout/Layout";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Details } from "@/components/Details/Details";
import { Example } from "@/components/Example/Example";

if (process.platform === "win32") {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "esbuild.exe");
} else {
  process.env.ESBUILD_BINARY_PATH = path.join(process.cwd(), "node_modules", "esbuild", "bin", "esbuild");
}

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  details: Details,
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
  const postPath = path.join(process.cwd(), "handbook", "intro");
  const postFilePath = path.join(postPath, "_test.mdx");
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const { code } = await bundleMDX(content, {
    cwd: postPath,
    xdmOptions: (options) => {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkMath, remarkMdxImages];
      options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeKatex];

      return options;
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl",
        ".jpg": "dataurl",
        ".svg": "dataurl",
      };

      return options;
    },
  });

  return {
    props: { code, frontMatter: data },
  };
}
