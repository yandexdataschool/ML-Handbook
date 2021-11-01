import Head from "next/head";
import { Layout } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { Footer } from "@/components/Footer/Footer";

const Home = ({ sections }) => {
  console.log(sections);
  return (
    <Layout>
      <Head>
        <title>Курс по теории машинного обучения от Школы Анализа Данных</title>
      </Head>
      <Header />
      <Main sections={sections} />
      <Footer />
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
          slug: "linear_models/intro",
        },
        {
          title: "Метрические алгоритмы ",
          slug: "metric_based/intro",
        },
        {
          title: "Деревья решений",
          slug: "decision_tree/intro",
        },
      ],
    },
    {
      title: "Оценка качества моделей",
      slug: "model_evaluation/intro",
    },
  ];

  return {
    props: {
      sections,
    },
  };
};

export default Home;
