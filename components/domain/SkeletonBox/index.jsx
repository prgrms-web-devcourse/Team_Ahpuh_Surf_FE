import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { Text } from '../../base'

const SkeletonBox = ({
  width,
  height,
  position,
  borderRadius,
  text,
  fontSize,
  color,
  style,
}) => {
  const skeletonLoading = keyframes`
    0%{
      background-color: hsl(200,20%,70%);
    }
    100%{
      background-color: hsl(200,20%,95%);
    }
  `
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgray;
    animation: ${skeletonLoading} 1s linear infinite alternate;
  `
  const containerStyle = {
    position: position || 'absolute',
    borderRadius,
    width,
    height,
  }
  return (
    <Container style={{ ...containerStyle, ...style }}>
      <Text size={fontSize} color={color}>
        {text}
      </Text>
    </Container>
  )
}
export default SkeletonBox
