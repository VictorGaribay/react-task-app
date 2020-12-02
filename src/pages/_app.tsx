import { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from 'src/styles/Global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

const CustomApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default CustomApp
