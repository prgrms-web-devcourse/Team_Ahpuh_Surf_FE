import styled from '@emotion/styled'
import Image from 'next/image'

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
    <AvatarWrapper size={size}>
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

export default Avatar
