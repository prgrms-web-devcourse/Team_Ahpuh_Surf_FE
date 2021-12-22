import styled from '@emotion/styled'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const AvatarWrapper = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: 50%;
  overflow: hidden;
  background-color: #eee;

  & img {
    transition: opacity 0.2s ease-out;
  }
`

const Avatar = ({ src, size, alt, ...props }) => {
  const imageStyle = {
    display: 'block',
    objectFit: 'cover',
  }
  const router = useRouter()
  const handleClick = () => {
    router.push('/mypage')
  }

  return (
    <AvatarWrapper size={size} style={props.style}>
      <Image
        width={size}
        height={size}
        src={src}
        alt={alt}
        className={imageStyle}
        onClick={handleClick}
        {...props}
      />
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
}
Avatar.defaultProps = {
  src: '/images/avatarDefault.png',
  size: '100',
  alt: 'avatar',
}
export default Avatar
