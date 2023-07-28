import Login from "@/components/login/login";
import Head from "next/head";
import { Fragment } from "react";
export default function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Log in</title>
      </Head>
      <Login />
    </Fragment>
  );
}
