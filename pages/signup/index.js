import SignUp from "@/components/signup/signup";
import { Fragment } from "react";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - signup</title>
      </Head>
      <SignUp />
    </Fragment>
  );
}
