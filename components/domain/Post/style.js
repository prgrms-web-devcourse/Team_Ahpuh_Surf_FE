import styled from '@emotion/styled'

export const CardContainer = styled.div`
  flex-shrink: 0;
  position: relative;
  padding: 15px 20px;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  width: 100%;
  /* height: ${({ height }) => `${height}px`}; */
  overflow: hidden;
  border-radius: 14px;
  background-color: ${(props) => props.backgroundColor || 'skyblue'};
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;

  p {
    color: #000;
  }
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
  color: #000;
`
export const Profile = styled.div`
  display: flex;

  & > div:first-of-type {
    flex-shrink: 0;
  }
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`

export const UserInfo = styled.p`
  strong {
    color: #000;
    font-weight: 700;
    font-size: 20px;
  }
`

export const Time = styled.p`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;

  span {
    padding-left: 5px;
    font-size: 10px;
    color: #444;
  }
`
export const Content = styled.div`
  height: 50px;
  width: 200px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  color: #000;
`
export const Follow = styled.button`
  margin-left: 5px;
  border: none;
  font-size: 12px;
  background-color: transparent;
  color: #8d8d8d;
  cursor: pointer;
`
export const Like = styled.button`
  border: none;
  background-color: transparent;
`
export const Favorite = styled.div`
  align-self: flex-end;
  cursor: pointer;
`
