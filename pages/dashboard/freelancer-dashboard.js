import React, { Fragment } from "react";
import Head from "next/head";
import FreelancerDashboard from "@/components/dashboard/customerDashboard/freelancerDashboard";
export default function FreelancerDashboardpage() {
  return (
    <Fragment>
    <Head>
      <title>Freelancer Dashboard</title>
    </Head>
    <FreelancerDashboard />
  </Fragment>
  )
}
