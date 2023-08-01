import Reporting from "@/components/reporting/reporting";
import { Fragment } from "react";
import Head from "next/head";

export default function ReportingPage() {
  return (
    <Fragment>
      <Head>
        <title>Reporting</title>
      </Head>
      <Reporting />
    </Fragment>
  );
}
