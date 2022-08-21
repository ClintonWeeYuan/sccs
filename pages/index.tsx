import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Banner2 from "../components/Banner2";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sarawak Children&apos;s Cancer Society</title>
        <meta
          name="description"
          content="A non-profit organization dedicated to improving the quality of life for children diagnosed with cancer"
        />
        <link rel="icon" href="/sccs-logo.png" />
      </Head>

      <Header />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;
