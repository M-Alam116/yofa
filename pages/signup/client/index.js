import SignUpForClient from '../../../components/signup/signupforclient/SignupForClient'
import { Fragment } from "react";
import Head from "next/head";

export default function SignUpPageForClient() {
  return (
    <Fragment>
      <Head>
        <title>Signup for Client</title>
      </Head>
      <SignUpForClient />
    </Fragment>
  );
}
