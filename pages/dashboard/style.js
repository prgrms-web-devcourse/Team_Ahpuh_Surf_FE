import styled from '@emotion/styled'

export const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
  overflow-y: auto;
`
export const HorizontalBox=styled.div`
  display: flex;
  width: 100%;
`
export const Box=styled.div`
  margin:10px 5px;
  border:1px solid black;
  border-radius: 14px;
  width:${({width})=>(width)};
  height:${({height})=>(height || 'auto')});
  font-size: 40px;
  font-weight: bold;
`