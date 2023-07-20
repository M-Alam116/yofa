
import { Fragment } from "react";
import Head from "next/head";
import Category from "@/components/category/category";

export default function CreateProjectPage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - categories</title>
      </Head>
      <Category />
    </Fragment>
  );
}
