import { Global } from '@emotion/react'
import reset from '../styles/reset'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
