import { Upload, Text, Dropdown, Textarea } from 'components/base'
import { DUMMY_DATA_CAT } from 'constants/DropdownData'
import { DatePicker } from 'components/domain'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'
import dynamic from 'next/dynamic'
import theme from 'styles/theme'
import { useState, useEffect, useMemo, useRef } from 'react'
import * as Style from './style'

const Slider = dynamic(() => import('components/domain/ScoreSlider'), {
  ssr: false,
})

const AddSurfModalSSR = dynamic(
  () => import('components/domain/AddSurfModal'),
  {
    ssr: false,
  },
)

const PostNew = () => {
  const isInitialMount = useRef(true)
  const [category, setCategory] = useState(DUMMY_DATA_CAT)
  const [fileObject, setFileObject] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [clickedDate, setClikedDate] = useState('')
  const [score, setScore] = useState(0)
  const [textareaValue, setTextareaValue] = useState('')
  const [toggleModal, setToggleModal] = useState(false)

  const changeToBlob = (data) => {
    if (!data) return
    const binaryData = []
    binaryData.push(data)
    const blob = URL.createObjectURL(new Blob(binaryData, { type: data.type }))
    return blob
  }

  const handleChange = (value) => {
    setFileObject(value)
  }

  const handleSubmit = (e) => {
    e?.preventDefault()
    const formData = new FormData()

    formData.set('categoryId', 1234)
    formData.set('selectedDate', new Date(clickedDate).toJSON())
    formData.set('content', textareaValue)
    formData.set('score', score)
    formData.set('fileUrl', changeToBlob(fileObject))

    for (const item of formData.entries()) {
      console.log(item)
    }
  }

  useMemo(() => changeToBlob, [])

  useEffect(() => {
    const newPost = { name: '+ New' }
    category.push(newPost)
  }, [])

  useEffect(() => {
    if (selectedCategory.name === '+ New') {
      setToggleModal(true)
    }
  }, [selectedCategory])

  console.log(isInitialMount.current)

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      handleSubmit()
    }
  }, [textareaValue])

  return (
    <Style.PostNewWrapper onSubmit={handleSubmit}>
      <Style.UpperSide>
        <Upload width="100%" droppable onChange={handleChange}>
          {(file, dragging) => (
            <Style.Box
              style={{
                border: dragging
                  ? `3px solid ${theme.surfColor.$blue__3}`
                  : '3px solid #eee',
              }}>
              {file ? (
                <Style.TextCenter>{file.name}</Style.TextCenter>
              ) : (
                <Style.IconWrapper>
                  <Image
                    src={UploadImage}
                    alt="UploadImage"
                    width={30}
                    height={30}
                  />
                  <Text strong color="inherit" style={{ marginTop: '10px' }}>
                    click of drag file
                  </Text>
                </Style.IconWrapper>
              )}
            </Style.Box>
          )}
        </Upload>
        <Style.OptionWrapper>
          <Dropdown
            data={category || {}}
            width="100%"
            height={45}
            isObj
            onChange={setSelectedCategory}
          />
          <DatePicker onChange={setClikedDate} />
        </Style.OptionWrapper>
        <Slider onChange={setScore} />
      </Style.UpperSide>
      <Style.BottomSide>
        <Textarea onChange={setTextareaValue} />
        <Style.Button>submit</Style.Button>
      </Style.BottomSide>
      {toggleModal && (
        <AddSurfModalSSR
          toggleModal={toggleModal}
          setToggleModal={setToggleModal}
        />
      )}
    </Style.PostNewWrapper>
  )
}

export default PostNew
