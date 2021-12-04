import styled from '@emotion/styled'

export const CardContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 95%;
  overflow: hidden;
  border-radius: 14px;
  background-color: ${(props) => props.backgroundColor || skyblue};
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
`
export const Main = styled.div`
  display: flex;
`

export const Score = styled.div`
  padding-right: 15px;
  margin-right: 10px;
  font-size: 80px;
  font-weight: bold;
`
export const Profile = styled.div`
  display: flex;
`
export const Content = styled.div`
  height: 72px;
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
  right: 20px;
  cursor: pointer;
`
export const Favorite = styled.div`
  align-self: flex-end;
  cursor: pointer;
`
