import { Fragment } from "react";
import Head from "next/head";
import Setting from "@/components/setting/setting";

export default function SettingPage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - setting</title>
      </Head>
      <Setting />
    </Fragment>
  );
}
