
import Detail from "@/components/Home/detail";
import HeroSection from "@/components/Home/hero";
import LoginHome from "@/components/loginHome/login-home";
import { Fragment } from "react";
import Head from "next/head";
import Search from "@/components/Home/search";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <Search />
      <Detail />

      {/* <LoginHome /> */}
    </Fragment>
  );
}
