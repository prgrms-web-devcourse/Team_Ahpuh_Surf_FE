import styled from '@emotion/styled'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

const UploadContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
`

const Input = styled.input`
  display: none; // input을 꾸미기 위해 display: none
`
const Upload = ({
                  width,
                  children,
                  droppable,
                  name,
                  accept,
                  value,
                  onChange,
                  ...props
                }) => {
  // input 대신 다른 걸 보여주기 위해 children 받음
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState(value)
  const inputRef = useRef(null) // display: none이므로 Ref로 직접 DOM에 접근

  const handleFileChange = (e) => {
    const { files } = e.target
    const changedFile = files[0] // 여러개 파일 중 제일 첫번째만 받음
    setFile(changedFile) // 파일 데이터 저장
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(changedFile)
  }

  const handleChooseFile = () => {
    inputRef.current.click()
  }

  // drag 이벤트 4가지
  const handleDragEnter = (e) => {
    if (!droppable) return

    // 이벤트 전파를 막지 않으면 파일을 브라우저에 놨을 때 새창이 열리게 됨.
    e.preventDefault()
    e.stopPropagation()

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      // 드래그앤드롭 이벤트 메소드는 dataTransfer 객체를 반환.
      setDragging(true)
    }
  }
  const handleDragLeave = (e) => {
    if (!droppable) return

    e.preventDefault()
    e.stopPropagation()

    setDragging(false)
  }
  const handleDragOver = (e) => {
    // 단순 이벤트 전파를 막기 위한 함수
    if (!droppable) return

    e.preventDefault()
    e.stopPropagation()
  }
  const handleFileDrop = (e) => {
    // 실제로 파일을 놨을 때의 처리
    // (handleFileChange는 input 데이터를 받고 얘는 dataTransfer 데이터를 받음)
    if (!droppable) return

    e.preventDefault()
    e.stopPropagation()

    const { files } = e.dataTransfer
    const changedFile = files[0]
    setFile(changedFile)
    // eslint-disable-next-line no-unused-expressions
    onChange && onChange(changedFile)
    setDragging(false)
  }
  return (
    <UploadContainer
      width={width}
      onClick={handleChooseFile}
      onDrop={handleFileDrop}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      {...props}>
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {typeof children === 'function' ? children(file, dragging) : children}
      {/* 파일 값을 잘 가져왔는지 확인하고 싶을 때 children을 함수로 받아서 보여주게 함 */}
    </UploadContainer>
  )
}

Upload.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  droppable: PropTypes.bool,
  name: PropTypes.string,
  accept: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

Upload.defaultProps = {
  width: '100%',
  droppable: false,
  name: '',
  accept: '파일 확장자|image/*|미디어 타입',
  value: '',
}

export default Upload
