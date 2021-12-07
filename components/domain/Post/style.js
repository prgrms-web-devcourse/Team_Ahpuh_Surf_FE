import styled from '@emotion/styled'

export const CardContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  padding: 15px 20px;
  width: 100%;
  height: ${({height}) => `${height}px`};
  overflow: hidden;
  border-radius: 14px;
  background-color: ${(props) => props.backgroundColor || 'skyblue'};
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`
export const Main = styled.div`
  display: flex;
`

export const Score = styled.div`
  width: 20%;
  padding-right: 15px;
  margin-right: 10px;
  font-size: 40px;
  font-weight: bold;
`
export const Profile = styled.div`
  display: flex;
`
export const Content = styled.div`
  height: 50px;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Follow = styled.div`
  margin-top: 3px;
  margin-left: 10px;
  font-size: 13px;
  color: #8d8d8d;
  cursor: pointer;
`
export const Like = styled.div`
  position: absolute;
  right: 16px;
  cursor: pointer;
`
export const Favorite = styled.div`
  align-self: flex-end;
  cursor: pointer;
`
