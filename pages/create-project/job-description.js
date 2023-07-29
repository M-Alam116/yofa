import { Fragment } from "react";
import Head from "next/head";
import JobDescription from "@/components/createProject/JobDescription";

export default function JobDescriptions() {
  return (
    <Fragment>
      <Head>
        <title>Create Project</title>
      </Head>
      <JobDescription />
    </Fragment>
  );
}
