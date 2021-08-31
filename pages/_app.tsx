import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactNode, Fragment } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import theme from '../theme'

import 'sanitize.css'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    font-family: 'Hind', sans-serif;
  }
`

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page)

  return (
    <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </Fragment>
  )
}
export default MyApp
