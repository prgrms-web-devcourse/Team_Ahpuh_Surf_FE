import { ThemeProvider } from '@emotion/react'
import Header from '../components/common/Header'
import theme from '../styles/theme'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default MyApp
