import Head from 'next/head'
import React from 'react'
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
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
