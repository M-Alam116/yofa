import Tender from "@/components/tender/Tender";
import Head from "next/head";
import { Fragment } from "react";

export default function TenderPage() {
  return (
    <Fragment>
      <Head>
        <title>Tender Page</title>
      </Head>

      <Tender />
    </Fragment>
  );
}
