import { Fragment } from "react";
import Shop from "@/components/shop/shop";
import Head from "next/head";
export default function ShopPage() {
  return (
    <Fragment>
      <Head>
        <title>Yofa - shop</title>
      </Head>
      <Shop />
    </Fragment>
  );
}
