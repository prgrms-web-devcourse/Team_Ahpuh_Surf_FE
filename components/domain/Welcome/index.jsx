import Lottie from 'react-lottie'
import animationData from 'public/lottie/surfing-poodle.json'
import { Logo } from 'components/base'
import * as Style from './style'

const Welcome = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Style.Wrapper>
      <Style.Inner>
        <Style.Box>
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled
            height={200}
            width={200}
            style={{
              position: 'relative',
              top: '20px',
            }}
          />
          <Logo width={200} white />
        </Style.Box>
        <Style.Msg>My own growth curve service</Style.Msg>
      </Style.Inner>
    </Style.Wrapper>
  )
}

export default Welcome
