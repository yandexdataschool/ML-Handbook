/* Vendor */
import Head from "next/head";
import Link from "next/link";

/* Components */
import { Layout } from "@/components/Layout/Layout";
import { Header } from "@/components/Header/Header";
import { Main } from "@/components/Main/Main";
import { Footer } from "@/components/Footer/Footer";

/* Table Of Contents*/
import sections from "../handbook/sections.json";

const Home = ({ sections }) => {
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
