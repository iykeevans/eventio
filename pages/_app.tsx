import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { AuthProvider } from '../context/auth'

import theme from '../theme'

import 'sanitize.css'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    font-family: 'Hind', sans-serif;
  }
`

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="description" content="Eventio the event planning app." />
        <meta name="author" content="Ezeani Ikenna" />
      </Head>

      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  )
}
export default MyApp
