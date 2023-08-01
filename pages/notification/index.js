import { Fragment } from "react";
import Head from "next/head";
import Notification from "@/components/notification/notification";

export default function NotificationPage() {
  return (
    <Fragment>
      <Head>
        <title>Notifications</title>
      </Head>

      <Notification />
    </Fragment>
  );
}
