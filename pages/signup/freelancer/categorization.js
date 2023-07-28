import Head from "next/head";
import { Fragment } from "react";
import Categorization from "@/components/signup/SignupForFreelancer/Categorization";
export default function FreelancerCategorization() {
  return (
    <Fragment>
      <Head>
        <title>Choose your Category</title>
      </Head>
      <Categorization />
    </Fragment>
  );
}
