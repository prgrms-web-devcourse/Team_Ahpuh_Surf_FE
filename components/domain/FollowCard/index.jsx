import Text from 'components/base/Text'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { Avatar } from '../../base'

const FollowCard = ({ userName, profilePhotoUrl, key }) => {
  const Container = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    margin: 5px;
  `
  const router = useRouter()

  const handleClick = (e) => {
    const { userId } = e.target
    router.push(`/mypage/${userId}`)
  }
  return (
    <Container userId={key} onClick={handleClick}>
      <Avatar src={profilePhotoUrl || 'https://picsum.photos/200'} size={40} />
      <Text style={{ marginLeft: 10 }} size={25}>
        {userName}
      </Text>
    </Container>
  )
}

export default FollowCard
