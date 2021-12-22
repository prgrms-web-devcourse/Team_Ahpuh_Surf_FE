import { RiArrowGoBackLine } from 'react-icons/ri'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Router, { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify'
import { deleteFavorite, deletePost } from 'utils/apis/post'
import postFavorite from 'utils/apis/post/postFavorite'
import deleteFollow from 'utils/apis/follow/deleteFollow'
import postFollow from 'utils/apis/follow/postFollow'
import { deleteLike, postLike } from 'utils/apis/like'
import Link from 'next/link'
import styled from '@emotion/styled'
import { Avatar } from '../../base'
import * as Style from './style'

const Button = styled.button`
  display: block;
  border: none;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  padding: 7px 0 7px 0;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: lightgray;
  }
`

const PostDetail = ({
  backgroundColor,
  categoryName,
  score,
  authorId,
  isLiked,
  likeId,
  date,
  content,
  profileImage,
  username,
  postId,
  createdAt,
  favorite,
  isMine,
  isFollow,
  year,
  month,
  selectedDate,
  imageUrl,
  fileUrl,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [_pid, setPid] = useState(postId)
  const [_like, setLike] = useState(!(isLiked === false || !isLiked))
  const [_likeId, setLikeId] = useState(likeId)
  const [_follow, setFollow] = useState(isFollow)
  const [menu, setMenu] = useState(false)
  const [_favorite, setFavorite] = useState(favorite)

  const menuRef = useRef(null)
  const avatarArgs = {
    alt: 'avatar',
    size: 40,
    src: profileImage,
  }
  const router = useRouter()

  useEffect(() => {
    console.log(fileUrl, 'fileUrl')
  }, [fileUrl])

  const [uid, setUid] = useState(null)
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])

  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  }

  const handleFavorite = async () => {
    if (_favorite) {
      try {
        const res = await deleteFavorite(_pid)
        if (res.status === 204) {
          toast.success('remove favorite complete', toastOptions)
          setFavorite(false)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      try {
        const res = await postFavorite(_pid)
        if (res.status === 200) {
          toast.success('add favorite complete', toastOptions)
          setFavorite(true)
        }
      } catch (e) {
        console.log(e)
      }
    }
    menuRef.current.style.display = 'none'
    setMenu(() => !menu)
  }
  const handleDeletePost = async () => {
    try {
      const res = await deletePost(postId)
      if (res.status === 204) {
        toast.success('delete post complete', toastOptions)

        const monthTmp = createdAt.slice(5, 7)
        Router.push(`/posts/${monthTmp}`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const handleFollow = async () => {
    // follow -> un-follow
    if (_follow) {
      try {
        const res = await deleteFollow(authorId)
        if (res.status === 204) {
          toast.success('unfollow ', toastOptions)
          setFollow(false)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      // un-follow -> follow
      try {
        const res = await postFollow(authorId)
        if (res.status === 201) {
          toast.success('follow ', toastOptions)
          setFollow(true)
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
  const handleLike = async () => {
    if (_like) {
      // like -> un-like
      try {
        const res = await deleteLike(postId, _likeId)
        if (res.status === 204) {
          setLike(!_like)
          setLikeId(res.data.likeId)
          toast('unlike this post', toastOptions)
        }
      } catch (e) {
        console.log(e)
      }
    } else {
      // un-like -> like
      try {
        const res = await postLike(postId)
        if (res.status === 200) {
          setLike(!_like)
          toast('like this post', toastOptions)
        }
      } catch (e) {
        console.log(e)
      }
    }
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
  if (!uid || !_pid) {
    return <p />
  }
  return (
    <Style.CardContainer backgroundColor={backgroundColor}>
      <ToastContainer />
      <Style.ControlBox>
        <RiArrowGoBackLine size={30} onClick={() => router.back()} />

        {isMine && (
          <div>
            <BiDotsHorizontalRounded size={30} onClick={handleMenu} />
            <Style.Menu
              ref={menuRef}
              style={{ display: 'none', padding: '10px' }}>
              {/* <div> */}
              <Link
                passHref
                href={{
                  pathname: `/posts/[year]/[month]/[postId]/edit`,
                  query: {
                    post: JSON.stringify({
                      imageUrl,
                      selectedDate,
                      categoryName,
                      postScore: score,
                      content,
                      postId,
                      fileUrl,
                    }),
                  },
                }}
                as={`/posts/${year}/${month}/${postId}/edit`}>
                <Button style={{ textDecoration: 'none', textAlign: 'center' }}>
                  기록 수정
                </Button>
              </Link>
              <Button type="button" onClick={handleDeletePost}>
                기록 삭제
              </Button>

              <Button type="button" onClick={handleFavorite}>
                {_favorite ? '즐겨찾기 삭제' : '즐겨찾기 추가'}
              </Button>
              {/* </div> */}
            </Style.Menu>
          </div>
        )}
      </Style.ControlBox>
      <Style.Profile>
        <Avatar {...avatarArgs} style={{ marginRight: 10 }} />
        <div>
          <div style={{ fontWeight: 'bold', fontSize: 20 }}>{username}</div>
          <div style={{ fontWeight: 'bold', fontSize: 13, marginTop: 5 }}>
            {date}
          </div>
        </div>
        {isMine ? (
          <div />
        ) : (
          <Style.Follow onClick={handleFollow}>
            {_follow ? <span>팔로우 취소</span> : <span>팔로우</span>}
          </Style.Follow>
        )}

        <Style.ProfileRight>
          {isMine ? (
            <div />
          ) : (
            <div onClick={handleLike}>
              {_like ? (
                <AiFillHeart size={30} color="red" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
            </div>
          )}

          <div style={{ fontSize: '14px' }}>{categoryName}</div>
        </Style.ProfileRight>
      </Style.Profile>
      <Image
        src={imageUrl}
        alt="post image"
        width="100%"
        height="50%"
        layout="responsive"
        priority
      />
      <Style.Main>
        <Style.Title>score: {score}</Style.Title>
        <p style={{ marginTop: 10, fontSize: 17 }}>{content}</p>
      </Style.Main>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <span style={{ fontSize: 20 }}>🔗&nbsp;&nbsp;</span>
        {fileUrl ? (
          <a href={fileUrl} download style={{ wordBreak: 'break-all' }}>
            {fileUrl}
          </a>
        ) : (
          <span>No Attachment</span>
        )}
      </div>
    </Style.CardContainer>
  )
}
PostDetail.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
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
  imageUrl: 'https://via.placeholder.com/250x150/d0d0d3/a9a9a9/?text=No+Image',
  profileImage: '/images/avatarDefault.png',
}
export default PostDetail
