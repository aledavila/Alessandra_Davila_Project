import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import reportAccessibility from '../utils/reportAccessibility'
import '@/styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

reportAccessibility(React)
