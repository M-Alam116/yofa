import Notification from "@/components/notification/notification"
import { Fragment } from "react"
import Head from "next/head"

export default function NotificationPage() {
  return (
    <Fragment>
       <Head>
        <title>Yofa - notification</title>
      </Head>
      <Notification />
    </Fragment>
  )
}
