import React from 'react'
import reportAccessibility from '../utils/reportAccessibility'
import '@/styles/global.scss'
import type { AppProps } from 'next/app'

import Layout from '@/components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

reportAccessibility(React)
