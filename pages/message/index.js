import Message from "@/components/message/message";
import { Fragment } from "react";
import Head from "next/head";

export default function MessagePage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - message</title>
      </Head>
      <Message />
    </Fragment>
  );
}
