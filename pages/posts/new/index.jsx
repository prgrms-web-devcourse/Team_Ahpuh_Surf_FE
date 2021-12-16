import { Upload, Text, Dropdown, Textarea } from 'components/base'
import { toast } from 'react-toastify'
import { DUMMY_DATA_CAT } from 'constants/DropdownData'
import { DatePicker } from 'components/domain'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'
import dynamic from 'next/dynamic'
import theme from 'styles/theme'
import { useState, useEffect, useMemo, useRef } from 'react'
import { checkEmpty } from 'utils/validation'
import { useGetCategories } from 'utils/apis/category'
import { changeToBlob } from 'utils/common/changeToBlob'
import * as Style from './style'
import { uploadPost } from 'utils/apis/post'

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
  const { data: categories, isLoading: categoriesLoading } = useGetCategories({
    revalidateOnFocus: false,
  })
  const [category, setCategory] = useState(categories || [])
  const [fileObject, setFileObject] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [clickedDate, setClikedDate] = useState('')
  const [score, setScore] = useState(0)
  const [textareaValue, setTextareaValue] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleChange = (value) => {
    setFileObject(value)
  }

  const handleSubmit = async (e) => {
    e?.preventDefault()
    // const formData = new FormData()

    const necessities = {
      date: clickedDate,
      score,
      content: textareaValue[0],
    }
    const errorWords = checkEmpty(necessities)

    if (errorWords.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const word of errorWords) {
        toast.error(word, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        })
      }
    } else {
      await setLoading(true)
      // formData.set('categoryId', selectedCategory?.categoryId) // optional
      // formData.set('selectedDate', new Date(clickedDate).toJSON())
      // formData.set('content', textareaValue[0])
      // formData.set('score', score)
      // formData.set('fileUrl', fileObject) // optional

      // for (const item of formData.entries()) {
      //   console.log(item, 'formdata')
      // }

      // const { data: postId } = await uploadPost({
      //   categoryId: selectedCategory?.categoryId,
      //   selectedDate: new Date(clickedDate),
      //   content: textareaValue[0],
      //   score,
      //   fileUrl: fileObject,
      // })

      console.log({
        categoryId: selectedCategory?.categoryId,
        selectedDate: new Date(clickedDate),
        content: textareaValue[0],
        score,
        fileUrl: fileObject,
      })
      setLoading(false)
      setTextareaValue(['', false])
    }
  }

  useEffect(() => {
    const newPost = { name: '+ New' }
    categories && categories.push(newPost)
  }, [])

  useEffect(() => {
    if (selectedCategory.name === '+ New') {
      setToggleModal(true)
    }
  }, [selectedCategory])

  useEffect(() => {
    if (textareaValue[1]) {
      handleSubmit()
    }
  }, [textareaValue])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      handleSubmit()
    }
  }, [])

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
            // data={categories || []}
            data={[]}
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
        <Style.Button disabled={isLoading}>
          {isLoading ? 'Loading' : 'submit'}
        </Style.Button>
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
