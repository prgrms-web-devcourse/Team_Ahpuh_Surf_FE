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

export const ChartContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 10px;
  /* padding: 0 10px 5px; */
  height: 100%;
  width: 100%;
  padding: 20px 5px;
  gap: 5px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  width: ${(width) => (width === undefined ? '500px' : `${width}px`)};
`

export const settingButtonStyle = {
  margin: '10px',
  backgroundColor: 'white',
  cursor: 'pointer',
  position: 'absolute',
  top: 5,
  right: 5,
  zIndex: 1,
}
