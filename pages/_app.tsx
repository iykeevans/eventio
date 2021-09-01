import type { AppProps } from 'next/app'
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
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
