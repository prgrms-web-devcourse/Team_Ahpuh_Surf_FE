const { default: styled } = require('@emotion/styled')

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputScore = styled.input`
  position: relative;
  display: inline-block;
  flex-shrink: 1;
  width: 80px;
  padding-right: 20px;
  border: none;
  font-size: 40px;
  text-align: center;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;

  & > button {
    border: none;
    border-radius: 3px;

    &:first-of-type {
      margin-bottom: 2px;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`
