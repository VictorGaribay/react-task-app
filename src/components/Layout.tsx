import Head from 'next/head'
import React from 'react'
import LayoutElement from 'src/styles/LayoutElement'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  pageTitle: string
  description: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description = 'Next.js Task',
  children
}) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@argentinus" key="twhandle" />
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
