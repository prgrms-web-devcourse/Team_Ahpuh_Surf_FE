import styled from '@emotion/styled'

export const ModalDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.3);
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => `${width}px`};
  max-height: ${({ height }) => `${height}px`};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: ${({ closeBtn }) => closeBtn && '32px'};
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  @media (max-width: 650px) {
    width: 85%;
    height: 85%;
  }
`
export const ModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
`

export const Btn = styled.div`
  position: fixed;
  font-size: 22px;
  background-color: ${({ theme: { color } }) => color.$main};
  color: white;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.55);
`
