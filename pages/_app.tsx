import type { AppProps } from 'next/app'
import Head from 'next/head'
import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

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
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  )
}
export default MyApp
