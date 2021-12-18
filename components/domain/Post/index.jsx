import { Avatar } from 'components/base'

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai'
import { useState } from 'react'
import { timeForToday } from 'utils/common/timeForToday'
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
  username = 'Test',
  follow,
  createdAt,
  height,
  ...props
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
    <Style.CardContainer
      backgroundColor={backgroundColor}
      height={height}
      style={{ ...props.style }}>
      {isMine ? null : (
        <div>
          <Style.Profile>
            <Avatar {...avatarArgs} style={{ marginRight: 10 }} />
            <Style.ProfileInfo>
              <header>
                <div>
                  <Style.UserInfo>
                    <strong>{username}</strong>
                    <Style.Follow onClick={handleFollow}>
                      {_follow ? '팔로우 취소' : '팔로우'}
                    </Style.Follow>
                  </Style.UserInfo>
                  <Style.Time>
                    <strong>{date}</strong>
                    <span>({timeForToday(createdAt)})</span>
                  </Style.Time>
                </div>

                <Style.Like onClick={handleLike}>
                  {_like ? (
                    <AiFillHeart size={20} color="red" />
                  ) : (
                    <AiOutlineHeart size={20} />
                  )}
                </Style.Like>
              </header>
            </Style.ProfileInfo>
          </Style.Profile>
        </div>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '5px',
          }}>
          <Style.Header>
            {isMine ? (
              <div style={{ marginLeft: 5 }}>{createdAt}</div>
            ) : (
              <span />
            )}
            <p>{categoryName}</p>
          </Style.Header>
          {isMine ? (
            <Style.Favorite onClick={handleFavorite}>
              {fav ? (
                <AiFillStar size="20" color="yellow" />
              ) : (
                <AiOutlineStar size="20" />
              )}
            </Style.Favorite>
          ) : (
            <span />
          )}
        </div>
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

Post.defaultProps = {
  backgroundColor: 'skyblue',
  isMine: true,
  like: false,
  favorite: false,
  follow: false,
}
export default Post
