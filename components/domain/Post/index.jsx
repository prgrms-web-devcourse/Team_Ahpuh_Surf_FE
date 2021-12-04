// import styled from '@emotion/styled'

// const Card = styled.div`
//   width: 330px;
//   height: 100px;
// `

import PropTypes from 'prop-types'
import { Avatar } from 'components/base'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react'

const Post = ({
  isMine,
  // width,
  // height,
  backgroundColor,
  date,
  categoryName,
  score,
  title,
  content,
  like, // bool
  favorite, // bool
  profileImage,
  username,
  follow, // bool
  createdAt,
}) => {
  const [fav, setFav] = useState(favorite)
  const defaultStyle = {
    position: 'relative',
    backgroundColor,
    borderRadius: 14,
    padding: 20,
    width: '90%',
    height: 160,
    overflow: 'hidden',
  }
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10,
    fontWeight: 'bold',
  }
  const mainStyle = {
    display: 'flex',
  }
  const scoreStyle = {
    fontSize: 80,
    fontWeight: 'bold',
    padding: 15,
    marginRight: 10,
  }
  const profileStyle = {
    display: 'flex',
  }
  const contentStyle = {
    overflow: 'hidden',
    height: '72px',
  }

  const handleFavorite = () => {
    setFav(!fav)
  }
  return (
    <div style={defaultStyle}>
      {isMine ? (
        <div style={profileStyle}>
          <Avatar
            alt="avatar"
            size="30px"
            src={profileImage}
            style={{ marginRight: 10 }}
          />
          <div>
            <div style={{ fontWeight: 'bold', fontSize: 18 }}>{username}</div>
            <div>follow: {follow}</div>
            <div>{date}</div>
          </div>
        </div>
      ) : (
        <div />
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <div style={{ alignSelf: 'flex-end' }} onClick={handleFavorite}>
          {fav ? <AiFillStar size="25" /> : <AiOutlineStar size="25" />}
        </div>
        <div style={headerStyle}>
          <div>{createdAt}</div>
          <div>{categoryName}</div>
        </div>

        <div style={mainStyle}>
          <div style={scoreStyle}>{score}</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</div>
            <div style={contentStyle}>{content}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Post.propTypes = {
  // width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  date: PropTypes.func,
  categoryName: PropTypes.string.isRequired,
  score: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  like: PropTypes.bool,
  favorite: PropTypes.bool,
  // profileImage: PropTypes.string.isRequired,
  // username: PropTypes.string.isRequired,
  // follow: PropTypes.bool,
  // createdAt: PropTypes.func,
}
Post.defaultProps = {
  // width: 320,
  // height: 160,
  backgroundColor: 'skyblue',
  date: new Date(),
  // categoryName:'react',
  // score
  // content
  like: false,
  favorite: false,
  // profileImage
  // username
  // follow: false,
  // createdAt: new Date(),
}
export default Post
