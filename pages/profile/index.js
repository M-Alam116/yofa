import Profile from '@/components/profile/profile'
import Head from 'next/head'
import { Fragment } from 'react'
export default function ProfilePage() {
  return (
    <Fragment>
    <Head>
      <title>Yofa - profile</title>
    </Head>
    <Profile />
  </Fragment>
  )
}
