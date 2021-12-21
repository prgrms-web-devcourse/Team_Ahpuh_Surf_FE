import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(129, 180, 207);
  background: linear-gradient(
    135deg,
    rgba(129, 180, 207, 1) 36%,
    rgba(91, 141, 178, 1) 76%,
    rgba(84, 133, 171, 1) 100%
  );
  z-index: 999;
`

export const Inner = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
`

export const Msg = styled.strong`
  display: inline-block;
  width: 100%;
  padding-top: 20px;
  font-size: 15px;
  text-align: center;
  color: #fff;
`
