import '../styles/globals.css'
import '../styles/createCompetition.css'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@emotion/react'
import theme from '../theme';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}
