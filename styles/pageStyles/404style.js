import styled from "@emotion/styled"
import { keyframes } from "@emotion/react"

export const NotFoundWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: rgba(247, 246, 243, 0.5);
`

export const NotFoundMsg = styled.div`
  height: 130px;
  font-weight: 900;
  text-align: center;
  line-height: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  `
export const wave = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`

export const swell = keyframes`
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
`
export const Waves = styled.div`
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg)
    repeat-x;
  position: absolute;
  top: -196px;
  width: 6400px;
  height: 198px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
`
export const Ocean = styled.div`
  height: 30%;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #015871;
  
  .wave:nth-of-type(2) {
    top: -173px;
    animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      ${swell} 7s ease -1.25s infinite;
    opacity: 1;
  }
`

