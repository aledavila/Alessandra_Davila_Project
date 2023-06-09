import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { ROUTES } from '../utils/routes';

export default function Home() {
  return (
    <>
      <Head>
        <title>LOTR Database</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='homepage'>
        <h2>Welcome</h2>
        <p>A Lord of the Rings database where you can find character information, quotes, and the LOTR movies information.</p>
        <Link href={ROUTES.characters}>Characters</Link>
        <Link href={ROUTES.movies}>Movies</Link>
      </div>
    </>
  )
}
