import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import Image from 'next/image'
import IconFinger from 'public/images/iconFinger.svg'

const bounce = keyframes`
0%{
	transform: translateY(0px);
}
100%{
	transform: translateY(-15px);
}
`

const FingerWrapper = styled.div`
  animation: ${bounce} 0.5s infinite alternate;
`

const BounceFinger = ({ style }) => (
  <FingerWrapper style={{ ...style }}>
    <Image src={IconFinger} alt="bounce finger" />
  </FingerWrapper>
)

export default BounceFinger
