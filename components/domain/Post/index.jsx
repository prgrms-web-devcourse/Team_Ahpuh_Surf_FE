import { Avatar } from 'components/base'

import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from 'react-icons/ai'
import { useState } from 'react'
import { timeForToday } from 'utils/common/timeForToday'
import dayjs from 'dayjs'
import { postFollow, deleteFollow } from 'utils/apis/follow'
import { postLike, deleteLike } from 'utils/apis/like'
import Link from 'next/link'
import * as Style from './style'

const Post = ({
  isMine,
  colorCode,
  date,
  categoryName,
  score,
  title,
  content,
  like,
  favorite,
  profileImage,
  userId,
  postId,
  likeId,
  username = 'Test',
  follow,
  createdAt,
  height,
  ...props
}) => {
  const [fav, setFav] = useState(favorite)
  const [_like, setLike] = useState(like)
  const [_follow, setFollow] = useState(follow)
  const [_likeId, setLikeId] = useState(likeId)

  const avatarArgs = {
    alt: 'avatar',
    size: 40,
    src: profileImage,
  }
  const handleFavorite = async () => {}

  const handleLike = async () => {
    try {
      if (_like) {
        const res = await deleteLike(postId, _likeId)
        setLike((_liked) => !_liked)
        setLikeId(res.data)
      } else {
        const res = await postLike(postId)
        setLike((_liked) => !_liked)
        setLikeId(res.data)
      }
    } catch (error) {
      console.error('error')
    }
  }

  const handleFollow = async () => {
    try {
      if (_follow) {
        await deleteFollow(userId)
        setFollow((isFollow) => !isFollow)
      } else {
        await postFollow(userId)
        setFollow((isFollow) => !isFollow)
      }
      setFollow(!_follow)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <Style.CardContainer backgroundColor={colorCode} height={height} style={{...props.style}}>
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
                    <strong>{dayjs(createdAt).format('YYYY-MM-DD')}</strong>
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
      <Link key={postId} href={`/posts/${dayjs(date).format('MM')}/${postId}`}>
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
              <Style.Content>{content}</Style.Content>
            </div>
          </Style.Main>
        </div>
      </Link>
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
