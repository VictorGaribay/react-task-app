import Head from 'next/head'
import React from 'react'
import LayoutElement from 'src/styles/LayoutElement'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  pageTitle: string
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <LayoutElement>
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutElement>
    </>
  )
}

export default Layout
