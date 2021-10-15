import Head from "next/head";

const Home = () => (
  <div className="container">
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Title</title>

      <meta name="description" content="Description" />
      <meta property="og:title" content="Title" />
      <meta property="og:description" content="Description" />
      <meta property="og:image" content="https://www.mywebsite.com/image.jpg" />
      <meta property="og:image:alt" content="Image alt" />
      <meta property="og:locale" content="ru_RU" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:url" content="" />

      <link rel="icon" href="/favicon.ico" />
      {/* <!-- 32×32 -->*/}
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      {/*<!-- 512×512 -->*/}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/*<!-- 180×180 -->*/}
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#FF00FF" />
    </Head>
    <main>
      <h1>Hello, my friend!</h1>
    </main>
  </div>
);

export default Home;
