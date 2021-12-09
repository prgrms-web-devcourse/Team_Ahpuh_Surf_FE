import styled from '@emotion/styled'

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  overflow-y: scroll;
`

export const Form = styled.form`
  height: calc(100% - 37px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Heading = styled.h1`
  padding: 5px;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  display: block;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 700;
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  background-color: ${({ theme: { surfColor } }) => surfColor.$blue__1};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { surfColor } }) => surfColor.$blue__2};
  }

  &:active {
    background-color: ${({ theme: { surfColor } }) => surfColor.$blue__3};
  }
`

export const ErrorText = styled.p`
  height: 18px;
  font-size: 11px;
  color: ${({ theme: { statusColor } }) => `${statusColor.$red}`};
`

export const LinkWrapper = styled.div`
  padding: 10px 0;
`

export const RedLink = styled.a`
  font-weight: 700;
  color: ${({ theme: { surfColor } }) => surfColor.$blue__4};
`
