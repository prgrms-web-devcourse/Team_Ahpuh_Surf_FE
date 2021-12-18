import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

export const Container = styled.div`
  position: relative;
  margin: 0 20px 100px 20px;
`
export const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const FollowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  cursor: pointer;
  & * {
    margin-top: 10px;
  }
`

export const Introduction = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Title = styled.div`
  display: inline;
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`
export const Content = styled.div`
  font-size: 25px;
  margin-top: 10px;
`
export const Graph = styled.div`
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
`

const skeletonLoading = keyframes`
  0%{
    background-color: hsl(200,20%,70%);
  }
  100%{
    background-color: hsl(200,20%,95%);
  }
`
export const AreaChartSkeleton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 34px;
  left: 0;
  border-radius: 10px;
  //width: ${({ width }) => width};
  width: 100%;
  // height:  ${({ height }) => `${height}px`}
  height: 305px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`
export const HeatmapSkeleton = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 270px;
  align-items: center;
  position: absolute;
  border-radius: 10px;
  top: 40px;
  left: 0;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`
