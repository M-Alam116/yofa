import Head from "next/head"
import { Fragment } from "react"
import ManageProject from "@/components/manageProjects/ManageProject"

export default function ManageProjectPage() {
  return (
    <Fragment>
      <Head>
        <title>Manage Projects</title>
      </Head>

      <ManageProject />
    </Fragment>
  )
}
