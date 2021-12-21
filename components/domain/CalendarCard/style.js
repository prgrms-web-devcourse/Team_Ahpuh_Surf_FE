import styled from '@emotion/styled'

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease;
  transform-style: preserve-3d;
`
export const CardWrapper = styled.div`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ width }) => `${(width * 4.3) / 3}px`};
  flex-shrink: 0;
  background-color: transparent;
  cursor: pointer;
  
  &.front .cardInner {
    transform: rotateY(180deg);
  }

  padding: 0 15px;
`

export const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ cardColor }) => cardColor};
  color: ${({ isLight, theme: { fontColor } }) =>
    isLight ? fontColor.$font : 'white'};
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  backface-visibility: hidden;
  padding: 35px 40px;
  transform: rotateY(180deg);
`

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  backface-visibility: hidden;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 40px 20px 30px;
  color: black;
`

export const MonthWrapper = styled.div`
  color: inherit;
  font-weight: 700;
`

export const MonthNumber = styled.div`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: inherit;
  width: fit-content;
  color: inherit;
  letter-spacing: 10px;
  margin-bottom: 5px;
`

export const MonthString = styled.div`
  font-size: ${({ fontSize }) => `${fontSize * 0.35}px`};
  font-weight: 300;
  letter-spacing: 1px;
  color: inherit;
`

export const StatBar = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
  gap: 7px;
`

export const BaseBar = styled.div`
  width: 100px;
  height: 5px;
  border-radius: 10px;
  background-color: ${({ isLight, theme: { fontColor } }) =>
    isLight ? fontColor.$font : 'white'};
  position: relative;

  &:after {
    content: '';
    width: ${({ rate }) => `${rate}px`};
    height: 5px;
    background-color: ${({ isLight }) =>
      isLight ? 'white' : 'rgba(0, 0, 0, 0.5)'};
    position: absolute;
    border-radius: ${({ rate }) => (rate === 100 ? '10px' : '10px 0 0 10px')};
  }
`

export const StatRate = styled.div`
  color: inherit;
  display: flex;
  align-items: center;
`

export const DayCnt = styled.p`
  color: ${({ isLight }) => (isLight ? 'black' : 'rgba(0, 0, 0, 0.5)')};
`

export const ToggleBtn = styled.button`
  border: none;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:active {
    background-color: rgba(0, 0, 0, 0.2);
  }
`
