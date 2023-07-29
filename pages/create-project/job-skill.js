import { Fragment } from "react";
import Head from "next/head";
import JobSkill from "@/components/createProject/JobSkill";

export default function JobSkills() {
  return (
    <Fragment>
    <Head>
      <title>Create Project</title>
    </Head>
    <JobSkill />
  </Fragment>
  )
}
