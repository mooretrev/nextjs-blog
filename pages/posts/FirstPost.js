import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>
          First Post
        </title>
      </Head>
      <h1>Here is my first post</h1>
      <h2>
        <Link href="/">
          Main page
        </Link>
      </h2>
    </Layout>
  )
}
