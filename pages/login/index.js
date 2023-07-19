import Login from "@/components/login/login";
import Head from "next/head";
import { Fragment } from "react";
export default function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - login</title>
      </Head>
      <Login />
    </Fragment>
  );
}
