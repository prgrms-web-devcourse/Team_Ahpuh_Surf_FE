import { Global } from '@emotion/react'
import reset from '../styles/reset'

const MyApp = ({ Component, pageProps }) => {
  console.log('hello world')
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
