import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
  overflow-y: auto;
`
export const HorizontalBox = styled.div`
  display: flex;
  width: 100%;
`
export const Box = styled.div`
  margin:10px 5px;
  border:1px solid black;
  border-radius: 14px;
  overflow: hidden;
  width:${({ width }) => width};
  height:${({ height }) => height || 'auto'});
  font-size: 40px;
  font-weight: bold;
`
const skeletonLoading = keyframes`
  0%{
    background-color: hsl(200,20%,70%);
  }
  100%{
    background-color: hsl(200,20%,95%);
  }
`
export const Graph = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ChartBox = styled.div`
  width: 100%;
  height:${({ height }) => height || 'auto'});
  border: 1px solid black;
  border-radius: 10px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
  margin:15px 0;
`
