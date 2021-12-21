import Link from 'next/link'
import Lottie from 'react-lottie'
import animationData from 'public/lottie/surfing-poodle.json'
import * as Style from 'styles/pageStyles/404style'

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
        <p>
          <span style={{ fontWeight: '700' }}>404</span> | Not Found
        </p>
        <Link href="/">🏠 Home</Link>
      </Style.NotFoundMsg>
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        height={300}
        width={300}
        style={{
          background: 'transparent',
          position: 'absolute',
          top: '200px',
          zIndex: '999',
        }}
      />
      <Style.Ocean>
        <Style.Waves className="wave" />
        <Style.Waves className="wave" />
      </Style.Ocean>
    </Style.NotFoundWrapper>
  )
}

export default Custom404
