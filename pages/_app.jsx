import { ThemeProvider } from '@emotion/react'
import { Header, Navbar } from 'components/common'
import theme from 'styles/theme'
import 'styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Header />
    <Component {...pageProps} />
    <Navbar />
  </ThemeProvider>
)

export default MyApp
