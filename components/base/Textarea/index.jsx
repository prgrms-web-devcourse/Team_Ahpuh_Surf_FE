import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const TextareaInput = styled.textarea`
  flex: 1;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}px`};
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  outline-color: ${({ theme: { surfColor } }) => surfColor.$blue__3};
  box-sizing: border-box;
  font-family: 'AppleSDGothicNeo', 'Frutiger';
  font-size: ${({ fontSize }) => `${fontSize}px`};
  resize: none;
`

const Textarea = ({ width, height, fontSize, placeholder }) => {
  const handleWrite = (e) => {
    if (e.target.value === '\n') return
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      alert(e.target.value) // submit event handler
      e.target.value = ''
    }
  }
  return (
    <TextareaInput
      onKeyUp={handleWrite}
      placeholder={placeholder}
      width={width}
      height={height}
      fontSize={fontSize}
    />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
}

Textarea.defaultProps = {
  placeholder: 'Shift+Enter로 줄바꿈/ Enter로 작성',
  width: '100%',
  height: 'auto',
  fontSize: 14,
}

export default Textarea
