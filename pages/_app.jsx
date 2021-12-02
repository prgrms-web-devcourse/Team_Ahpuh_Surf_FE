import { Global, ThemeProvider } from '@emotion/react'
import { Global } from '@emotion/react'
import theme from '../styles/theme'
import reset from '../styles/reset'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global styles={reset} />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
