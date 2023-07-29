import React, { Fragment } from "react";
import Head from "next/head";
import CustomerDashboard from "@/components/dashboard/customerDashboard/customerDashboard";

export default function ClientDashboardPage() {
  return (
    <Fragment>
      <Head>
        <title>Client Dashboard</title>
      </Head>
      <CustomerDashboard />
    </Fragment>
  );
}
