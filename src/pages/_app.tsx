import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'
import '../styles/Home.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
