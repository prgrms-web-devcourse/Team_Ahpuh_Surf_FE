import styled from '@emotion/styled'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { Avatar } from '../../base'

const NoticeCard = ({ profileImage, follower, type, imageUrl }) => {
  const CardContainer = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    padding: 10px;
  `
  const Content = styled.div`
    margin-left: 10px;
    width: 80%;
    height: 100%;
  `
  const postImageStyle = {
    width: '40px',
    height: '40px',
    marginLeft: '10px',
  }
  return (
    <CardContainer>
      <Avatar src={profileImage} size={40} alt="avatar" />
      <Content>
        {type === 'follow' ? (
          <div>
            <strong>{follower}</strong> 님이 회원님을&nbsp;
            <strong>팔로우</strong>
            하기 시작했습니다.
          </div>
        ) : (
          <div>
            <strong>{follower}</strong> 님이 회원님의 글에&nbsp;
            <strong>좋아요</strong>를 눌렀습니다
          </div>
        )}
      </Content>
      <Image src={imageUrl} alt="post image" style={postImageStyle} />
    </CardContainer>
  )
}

NoticeCard.propTypes = {
  profileImage: PropTypes.string.isRequired,
  follower: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}
export default NoticeCard
