import { RiArrowGoBackLine } from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useRef, useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import * as Style from './style'
import { Avatar } from '../../base'

const PostDetail = ({
  backgroundColor,
  categoryName,
  score,
  title,
  imageUrl,
  follow,
  like,
  date,
  content,
  profileImage,
  username,
}) => {
  const [_like, setLike] = useState(like)
  const [_follow, setFollow] = useState(follow)
  const [menu, setMenu] = useState(false)
  const menuRef = useRef(null)
  const avatarArgs = {
    alt: 'avatar',
    size: 40,
    src: profileImage,
  }

  const handleAddFavorite = () => {
    console.log('click add favorite')
  }
  const handleDeletePost = () => {
    console.log('click delete post')
  }
  const handleUpdatePost = () => {
    console.log('click update post')
  }

  const handleFollow = () => {
    setFollow(!_follow)
  }
  const handleLike = () => {
    setLike(!_like)
  }
  const handleBack = () => {
    console.log('back clicked')
  }
  const handleMenu = () => {
    if (menu) {
      menuRef.current.style.display = 'none'
      setMenu(() => !menu)
    } else {
      menuRef.current.style.display = 'block'
      setMenu(() => !menu)
    }
  }

  return (
    <Style.CardContainer backgroundColor={backgroundColor}>
      <Style.ControlBox>
        <RiArrowGoBackLine size={30} onClick={handleBack} />

        <div>
          <BiDotsHorizontalRounded size={30} onClick={handleMenu} />
          <Style.Menu ref={menuRef} style={{ display: 'none' }}>
            <div onClick={handleUpdatePost}>기록 수정</div>
            <div onClick={handleDeletePost}>기록 삭제</div>
            <div onClick={handleAddFavorite}>즐겨찾기 추가</div>
          </Style.Menu>
        </div>
      </Style.ControlBox>
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
        <Style.ProfileRight>
          <div onClick={handleLike}>
            {_like ? (
              <AiFillHeart size={30} color="red" />
            ) : (
              <AiOutlineHeart size={30} />
            )}
          </div>
          <div style={{ fontSize: '14px' }}>{categoryName}</div>
        </Style.ProfileRight>
      </Style.Profile>
      <Image src={imageUrl} alt="post image" style={Style.imageStyle} />
      <Style.Main>
        <Style.Title>{title}</Style.Title>
        <Style.Title>score: {score}</Style.Title>
        <p style={{ fontSize: 17 }}>{content}</p>
      </Style.Main>
    </Style.CardContainer>
  )
}
PostDetail.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  follow: PropTypes.bool,
  like: PropTypes.bool,
  date: PropTypes.string.isRequired,
  profileImage: PropTypes.string,
  username: PropTypes.string.isRequired,
}
PostDetail.defaultProps = {
  follow: false,
  like: false,
  imageUrl: 'https://picsum.photos/200',
  profileImage: 'https://picsum.photos/200',
}
export default PostDetail
