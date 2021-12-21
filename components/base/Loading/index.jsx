import Lottie from 'react-lottie'
import animationData from 'public/images/loadingAnimation.json'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

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
  z-index: 1000;
`

const Loading = ({ loading, setLoading, size, blur }) => {
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'unset'
  }, [loading])

  useEffect(() => {
    if (loading && setLoading) {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }
  }, [loading])

  return (
    loading && (
      <LoadingWrapper blur={blur}>
        <Lottie
          options={defaultOptions}
          width={size}
          height={size}
          isClickToPauseDisabled
        />
      </LoadingWrapper>
    )
  )
}

Loading.propTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
  size: PropTypes.number,
  blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

Loading.defaultProps = {
  loading: false,
  setLoading: () => {},
  size: 220,
  blur: 10,
}

export default Loading
