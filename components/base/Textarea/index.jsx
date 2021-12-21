import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'

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

const Textarea = ({
  width,
  height,
  fontSize,
  placeholder,
  onChange,
  value,
}) => {
  // console.log(value)
  const inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.value = value
  }, [])
  const handleWrite = (e) => {
    if (e.target.value.trim() === '') return
    // TODO: onChange([바꿀 state, submit 여부])
    onChange && onChange([e.target.value, false])
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      onChange && onChange([e.target.value, true])
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
      ref={inputRef}
    />
  )
}

Textarea.propTypes = {
  placeholder: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Textarea.defaultProps = {
  placeholder: 'Shift+Enter로 줄바꿈/ Enter로 작성',
  width: '100%',
  height: 'auto',
  fontSize: 14,
  value: '',
}

export default Textarea
