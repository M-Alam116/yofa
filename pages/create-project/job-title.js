import { Fragment } from "react";
import Head from "next/head";
import JobTitle from "@/components/createProject/JobTitle";

export default function JobTitlePage() {
  return (
    <Fragment>
    <Head>
      <title>Create Project</title>
    </Head>
    <JobTitle />
  </Fragment>
  )
}
