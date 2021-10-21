import Head from "next/head";
import { Layout } from "@/components/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Main page title, if you want to set title or other meta tags</title>
      </Head>
      <main>
        <h1>Hello, world!</h1>
      </main>
    </Layout>
  );
};

export default Home;
