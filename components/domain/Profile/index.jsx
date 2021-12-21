import styled from '@emotion/styled'
import { Avatar, Text } from '../../base'

const Profile = ({ profilePhotoUrl, userName, email, children }) => {
  const avatarArgs = {
    src: profilePhotoUrl,
    size: '150%',
    alt: 'avatar',
  }
  const avatarStyle = {
    marginTop: 10,
    marginBottom: 10,
  }
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <Container>
      <Avatar {...avatarArgs} style={avatarStyle} />
      <Text size={25} strong>
        {userName}
      </Text>
      <Text size={15} color="#8D8D8D">
        {email}
      </Text>
      {children}
    </Container>
  )
}
export default Profile
