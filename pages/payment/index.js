import React, { Fragment } from 'react'
import Head from 'next/head'
import Payment from '@/components/payment/payment'

export default function PaymentPage() {
  return (
    <Fragment>
       <Head>
        <title>Payment</title>
      </Head>
      <Payment />
    </Fragment>
  )
}
