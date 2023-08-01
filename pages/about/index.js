import About from "@/components/about/about";
import { Fragment } from "react";
import Head from "next/head";
export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About</title>
      </Head>
      <About />
    </Fragment>
  );
}
