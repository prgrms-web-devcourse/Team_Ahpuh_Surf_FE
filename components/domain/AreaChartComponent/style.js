import styled from '@emotion/styled'

export const Button = styled.button`
  color: #222;
  background-color: #fff;
  border: 1px solid #e7e7e7;
  border-bottom: 2px solid #ddd;
  border-radius: 2px;
  padding: 4px 17px;
  margin-left: 3px;
  margin-right: 3px;
`
export const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid black',
  borderRadius: 10,
  padding: 10,
}
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: ${(props) => (props.width === undefined ? '500px' : `${width}px`)};
`
export const settingButtonStyle = {
  margin: '10px',
  cursor: 'pointer',
}
