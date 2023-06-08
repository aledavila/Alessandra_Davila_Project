import React from 'react'
import reportAccessibility from '../utils/reportAccessibility'
import '@/styles/global.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

reportAccessibility(React)
