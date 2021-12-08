import styled from '@emotion/styled'

export const Button = styled.button`
  padding: 4px 17px;
  margin-left: 3px;
  margin-right: 3px;
  border: 1px solid #e7e7e7;
  border-bottom: 2px solid #ddd;
  border-radius: 2px;
  background-color: #fff;
  color: #222;
`
export const containerStyle = {
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid darkgray',
  borderRadius: 10,
  padding: 10,
  marginTop: 10,
}
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: ${(props) => (props.width === undefined ? '500px' : `${width}px`)};
`
export const settingButtonStyle = {
  margin: '10px',
  backgroundColor: 'white',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
}
