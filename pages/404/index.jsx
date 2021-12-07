import Link from 'next/link'
import Lottie from 'react-lottie'
import animationData from 'public/lottie/surfing-poodle.json'
import * as Style from './style'

const Custom404 = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Style.NotFoundWrapper>
      <Style.NotFoundMsg>
        <p>You are lost...!</p>
        <Style.LinkWrapper>
          <Link href="/">Go back to Home</Link>
        </Style.LinkWrapper>
      </Style.NotFoundMsg>
      <Style.LottieWrapper>
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled
          height={300}
          width={300}
          style={{ background: 'skyBlue' }}
        />
      </Style.LottieWrapper>
    </Style.NotFoundWrapper>
  )
}

export default Custom404
