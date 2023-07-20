
import Detail from "@/components/Home/detail";
import HeroSection from "@/components/Home/hero";
import LoginHome from "@/components/loginHome/login-home";
import { Fragment } from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - home</title>
      </Head>
      <HeroSection />
      <Detail />

      <LoginHome />
    </Fragment>
  );
}
