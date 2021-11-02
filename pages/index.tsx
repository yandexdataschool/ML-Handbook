import Head from "next/head";
import { Layout } from "@/components/Layout/Layout";
import Link from "next/link";

type Chapter = {
  title: string;
  slug: string;
};

type Section = {
  title: string;
  slug?: string;
  chapters?: Chapter[];
};

const Chapter = ({ title, slug }: Chapter) => {
  return (
    <li>
      <Link href={slug}>{title}</Link>
    </li>
  );
};

const Section = ({ title, slug, chapters }: Section) => {
  if (slug) {
    return (
      <li>
        <Link href={slug}>{title}</Link>
      </li>
    );
  }

  return (
    <>
      <li>
        <p>{title}</p>
      </li>
      <ol type="i" className="ml-4">
        {chapters.map((chapter) => (
          <Chapter key={chapter.slug} title={chapter.title} slug={chapter.slug} />
        ))}
      </ol>
    </>
  );
};

const Home = ({ sections }) => {
  console.log(sections);
  return (
    <Layout>
      <Head>
        <title>Main page title, if you want to set title or other meta tags</title>
      </Head>
      <main className="container mx-auto">
        <div className="prose">
          <h1>Школа анализа данных</h1>
          <ol>
            {sections.map((section) => (
              <Section key={section.title} slug={section.slug} title={section.title} chapters={section.chapters} />
            ))}
          </ol>
        </div>
      </main>
    </Layout>
  );
};

export const getStaticProps = () => {
  const sections = [
    {
      title: "Введение",
      slug: "intro",
      description: "",
    },
    {
      title: "Классическое обучение с учителем",
      chapters: [
        {
          title: "Линейные модели",
          slug: "linear_models",
        },
        {
          title: "Метрические алгоритмы ",
          slug: "metric_based",
        },
        {
          title: "Деревья решений",
          slug: "decision_tree",
        },
        {
          title: "Ансамбли",
          slug: "ensembles",
        },
        {
          title: "Градиентный бустинг",
          slug: "grad_boost",
        },
      ],
    },
    {
      title: "Оценка качества моделей",
      slug: "model_evaluation",
    },
  ];

  return {
    props: {
      sections,
    },
  };
};

export default Home;
