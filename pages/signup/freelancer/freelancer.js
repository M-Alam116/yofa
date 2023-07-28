import SignupForFreelancer from "@/components/signup/SignupForFreelancer/registration";
import { Fragment } from "react";
import Head from "next/head";
export default function FreelancerHeadline() {
  return (
    <Fragment>
      <Head>
        <title>Signup for freelancer </title>
      </Head>
      <SignupForFreelancer />
    </Fragment>
  );
}
