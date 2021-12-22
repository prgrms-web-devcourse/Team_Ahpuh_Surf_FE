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
  display: ${({ txt }) => txt && 'flex'};
  flex-direction: column;
  animation: ${bounce} 0.5s infinite alternate;

  & > p {
    padding-bottom: 10px;
  }
`

const BounceFinger = ({ children, style }) => (
  <FingerWrapper txt={children} style={{ ...style }}>
    <p>{children}</p>
    <Image src={IconFinger} alt="bounce finger" />
  </FingerWrapper>
)

export default BounceFinger
