/* Vendor */
import { useMemo } from "react";

import { GetStaticPathsResult } from "next";
import Head from "next/head";

import { getMDXComponent } from "mdx-bundler/client";

/* Components */
import { Layout } from "@/components/Layout/Layout";
import { CustomLink } from "@/components/CustomLink/CustomLink";
import { Details } from "@/components/Details/Details";
import { Example } from "@/components/Example/Example";
import { ToC } from "@/components/ToC/ToC";
import { IFrame } from "@/components/IFrame/IFrame";
import { Content } from "@/components/Content/Content";
import { HeaderArticle } from "@/components/HeaderArticle/HeaderArticle";
import { Footer } from "@/components/Footer/Footer";
import { Sidebar } from "@/components/Sidebar/Sidebar";

/* Utils */
import { getTransformedArticle } from "../utils/article/get-transformed-article";
import { FrontMatter, getArticleContent } from "../utils/article/get-article-content";
import { getAllArticleSlugs } from "../utils/article/get-all-article-slugs";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  CustomLink,
  Details,
  nav: ToC,
  Example,
  IFrame,
};

type Props = {
  code: string;
  frontMatter: FrontMatter;
  tableOfContents: Record<string, any>;
};

export default function ArticlePage({ code, frontMatter, tableOfContents }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontMatter.title}</title>
        {frontMatter.description && <meta name="description" content={frontMatter.description} />}
        <meta property="og:type" content="article" />
      </Head>
      <HeaderArticle />
      <main className="container mx-auto flex">
        <Sidebar />
        <Content>
          {/*@ts-ignore*/}
          <Component components={components} />
        </Content>
      </main>
      <Footer />
    </Layout>
  );
}

const ARTICLES_FOLDER = "handbook";

export function getStaticPaths(): GetStaticPathsResult {
  const paths = getAllArticleSlugs(ARTICLES_FOLDER);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { content, frontMatter, tableOfContents } = getArticleContent(ARTICLES_FOLDER, slug);
  const { code } = await getTransformedArticle(slug, content);

  return {
    props: {
      code,
      frontMatter,
      tableOfContents,
    },
  };
}
