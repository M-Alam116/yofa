import Signup from "@/components/signup/Signup/Signup";
import { Fragment } from "react";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <Fragment>
      <Head>
        <title>What is your Role</title>
      </Head>
      <Signup />
    </Fragment>
  );
}
