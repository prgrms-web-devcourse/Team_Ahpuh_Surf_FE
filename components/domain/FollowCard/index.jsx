import Text from 'components/base/Text'
import styled from '@emotion/styled'
import { Avatar } from '../../base'

const FollowCard = ({ userName, profilePhotoUrl }) => {
  const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
  `
  return (
    <Container>
      <Avatar src={profilePhotoUrl || 'https://picsum.photos/200'} size={30} />
      <Text style={{ marginLeft: 10 }} size={20}>
        {userName}
      </Text>
    </Container>
  )
}

export default FollowCard
