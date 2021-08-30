import type { AppProps } from 'next/app'
import { NextPage } from 'next'
import { ReactNode, Suspense } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { AuthProvider } from '../store/auth-context'

import theme from '../theme'

import 'sanitize.css'
import AuthGuard from '../components/auth-guard'

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
    <AuthProvider>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <AuthGuard>{getLayout(<Component {...pageProps} />)}</AuthGuard>
      </ThemeProvider>
    </AuthProvider>
  )
}
export default MyApp
