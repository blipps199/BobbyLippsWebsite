import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bobby Lipps - Front-End / Cloud Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Bobby Lipps" />
        <meta name="keywords" content="ReactJS, NextJS" />
        <meta name="description" content="I am a talented Front-End / Cloud Developer looking for my next opporunity." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Bobby Lipps - Front-End / Cloud Developer" />
        <meta property="og:locale" content="en_GB" />
        <title data-rh="true">Bobby Lipps - Front-End / Cloud Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Bobby Lipps - Front-End / Cloud Developer"/>
        <meta data-rh="true" property="og:image" content="/images/blaiti.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;