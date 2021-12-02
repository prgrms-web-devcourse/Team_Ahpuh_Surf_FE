import styled from '@emotion/styled'
import { useRef } from 'react'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'

const Input = styled.input`
  display: none;
`

const Box = styled.div`
  width: 330px;
  height: 160px;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
`
const Upload = ({
  children,
  name,
  size,
  accept,
  value,
  mode,
  onChange,
  ...props
}) => {
  const inputRef = useRef(null)
  const handleFileChange = (e) => {
    const { files } = e.target

    console.log(files)
    // TODO: 파일 업로드 후 처리하는 로직 domain 생성단계에서 추가할 것!
  }

  const handleChooseFile = () => {
    inputRef.current.click()
  }
  return (
    <Box onClick={handleChooseFile} style={props.style} {...props}>
      <Image
        src={UploadImage}
        width={50}
        height={50}
        style={{ marginBottom: 15 }}
      />
      <Input
        ref={inputRef}
        type="file"
        name={name}
        accept={accept}
        onChange={handleFileChange}
      />
      {children}
    </Box>
  )
}

export default Upload
