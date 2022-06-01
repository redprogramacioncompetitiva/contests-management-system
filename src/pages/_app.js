import '../styles/globals.css'
import '../styles/createCompetition.css'
import '../styles/signIn.css'
import '../styles/nav/layout.css'
import '../styles/nav/sidebar.css'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@emotion/react'
import theme from '../theme';
import Layout from '../components/global/layout'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </ThemeProvider>
  )
}
