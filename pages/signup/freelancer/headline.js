import Headline from "@/components/signup/SignupForFreelancer/Headline";
import { Fragment } from "react";
import Head from "next/head";
export default function FreelancerHeadline() {
  return (
    <Fragment>
      <Head>
        <title>Your Role</title>
      </Head>
      <Headline />
    </Fragment>
  );
}
