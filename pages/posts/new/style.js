import styled from '@emotion/styled'

export const PostNewWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`

export const OptionWrapper = styled.div`
  display: grid;
  padding: 10px 0;
  display: flex;

  & > div {
    width: 50%;

    &:first-of-type {
      padding-right: 10px;
    }
  }
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Box = styled.div`
  width: 100%;
  height: 160px;
  border: 3px solid inherit;
  border-radius: 10px;
  background-color: #e9e9e9;
`

export const TextCenter = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const Button = styled.button`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  border: none;
  margin: 10px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.surfColor.$blue__1};
  cursor: pointer;
`

export const UpperSide = styled.div`
  height: 300px;
`

export const BottomSide = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 300px);
`
