import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 0 20px 100px 20px;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FollowContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const FollowItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  & * {
    margin-top: 10px;
  }
`
export const avatarStyle = {
  marginTop: 10,
  marginBottom: 10,
}

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
`
export const Content = styled.div`
  font-size: 25px;
  margin-top: 10px;
`
export const Graph = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`
