import PropTypes from 'prop-types'
import { Avatar } from 'components/base'

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai'
import { useState } from 'react'
import * as Style from './style'

const Post = ({
  isMine,
  backgroundColor,
  date,
  categoryName,
  score,
  title,
  content,
  like,
  favorite,
  profileImage,
  username,
  follow,
  createdAt,
}) => {
  const [fav, setFav] = useState(favorite)
  const [_like, setLike] = useState(like)
  const [_follow, setFollow] = useState(follow)

  const avatarArgs = {
    alt: 'avatar',
    size: 40,
    src: profileImage,
  }
  const handleFavorite = () => {
    setFav(!fav)
  }
  const handleLike = () => {
    setLike(!_like)
  }
  const handleFollow = () => {
    setFollow(!_follow)
  }
  return (
    <Style.CardContainer backgroundColor={backgroundColor}>
      {isMine ? (
        <div />
      ) : (
        <div>
          <Style.Profile>
            <Avatar {...avatarArgs} style={{ marginRight: 10 }} />
            <div>
              <div style={{ fontWeight: 'bold', fontSize: 20 }}>{username}</div>
              <div style={{ fontWeight: 'bold', fontSize: 13, marginTop: 5 }}>
                {date}
              </div>
            </div>
            <Style.Follow onClick={handleFollow}>
              {_follow ? <span>팔로우 취소</span> : <span>팔로우</span>}
            </Style.Follow>
            <Style.Like onClick={handleLike}>
              {_like ? (
                <AiFillHeart size={25} color="red" />
              ) : (
                <AiOutlineHeart size={25} />
              )}
            </Style.Like>
          </Style.Profile>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        {isMine ? (
          <Style.Favorite onClick={handleFavorite}>
            {fav ? (
              <AiFillStar size="25" color="yellow" />
            ) : (
              <AiOutlineStar size="25" />
            )}
          </Style.Favorite>
        ) : (
          <span />
        )}

        <Style.Header>
          {isMine ? <div style={{ marginLeft: 5 }}>{createdAt}</div> : <span />}
          <div>{categoryName}</div>
        </Style.Header>

        <Style.Main>
          <Style.Score>{score}</Style.Score>
          <div>
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</div>
            <Style.Content>{content}</Style.Content>
          </div>
        </Style.Main>
      </div>
    </Style.CardContainer>
  )
}

Post.propTypes = {
  isMine: PropTypes.bool,
  backgroundColor: PropTypes.string,
  date: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.bool,
  favorite: PropTypes.bool,
  profileImage: PropTypes.string.isRequired,
  follow: PropTypes.bool,
}
Post.defaultProps = {
  backgroundColor: 'skyblue',
  isMine: true,
  like: false,
  favorite: false,
  follow: false,
}
export default Post
