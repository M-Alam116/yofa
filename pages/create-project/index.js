import CreateProject from "@/components/createProject/create-project";
import { Fragment } from "react";
import Head from "next/head";

export default function CreateProjectPage() {
  return (
    <Fragment>
      <Head>
        <title>Create Project</title>
      </Head>
      <CreateProject />
    </Fragment>
  );
}
