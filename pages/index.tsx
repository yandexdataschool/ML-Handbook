/* Vendor */
import Head from "next/head";

/* Components */
import { Layout } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { Main, Section } from "@/components/Main/Main";
import { Footer } from "@/components/Footer/Footer";

/* Table Of Contents*/
import sections from "../handbook/sections.json";

type Props = {
  sections: Section[];
};

const Home = ({ sections }: Props) => {
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
  return {
    props: {
      sections,
    },
  };
};

export default Home;
