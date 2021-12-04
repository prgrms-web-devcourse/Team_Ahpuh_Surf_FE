import styled from '@emotion/styled'
import Image from 'next/image'
import PropTypes from 'prop-types'

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

  return (
    <AvatarWrapper size={size} style={props.style}>
      <Image
        width={size}
        height={size}
        src={src}
        alt={alt}
        style={imageStyle}
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
  src: 'https://picsum.photos/200',
  size: '100',
  alt: 'avatar',
}
export default Avatar
