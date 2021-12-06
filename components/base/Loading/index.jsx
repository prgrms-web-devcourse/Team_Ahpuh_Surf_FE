import Lottie from 'react-lottie'
import animationData from 'public/images/loadingAnimation.json'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: ${({ blur }) =>
    typeof blur === 'number' ? `blur(${blur}px)` : `blur(${blur}})`};
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const Loading = ({ size, blur }) => (
  <LoadingWrapper blur={blur}>
    <Lottie
      options={defaultOptions}
      width={size}
      height={size}
      isClickToPauseDisabled
    />
  </LoadingWrapper>
)

Loading.propTypes = {
  size: PropTypes.number,
  blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Loading.defaultProps = {
  size: 150,
  blur: 12,
}

export default Loading
