import styled from '@emotion/styled'

export const ModalInner = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 10px 20px;
`

export const InputWrapper = styled.div`
  position: relative;
  border-radius: 7px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);

  & > input {
    padding-right: 50px;
  }
`

export const SelectEmoji = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`

export const FormWrapper = styled.div`
  position: relative;
  bottom: 10px;
`

export const Text = styled.p`
  flex-shrink: 0;
  padding-right: 10px;
  font-size: ${({ size }) =>
    size && typeof size === 'string' ? size : `${size}px`};
  font-weight: ${({ strong }) => (strong ? 700 : 400)};
`

export const EmojiBox = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  width: 50px;
  height: 100%;
  text-align: center;
  font-size: 35px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 5px 0;

  button:first-of-type {
    margin-right: 10px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: ${({ height }) => height && `${height}px`};
  margin: ${({ marginVetical }) =>
    marginVetical ? `${marginVetical}px 0` : 0};
  border: ${({ background }) => (background ? `1px solid black` : `none`)};
  border-radius: 8px;
  text-align: center;
  background-color: ${({ theme, background }) =>
    background || theme.surfColor.$blue__1};
  cursor: pointer;
`
