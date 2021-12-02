import { Global, ThemeProvider } from '@emotion/react'
import Header from '../components/common/Header'
import theme from '../styles/theme'
import reset from '../styles/reset'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Global styles={reset} />
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
