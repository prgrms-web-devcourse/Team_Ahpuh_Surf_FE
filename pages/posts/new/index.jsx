import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import { Upload, Text, Dropdown, Textarea } from 'components/base'
import { DatePicker } from 'components/domain'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import theme from 'styles/theme'
import { useState, useEffect, useRef } from 'react'
import { checkEmpty } from 'utils/validation'
import { useGetCategories } from 'utils/apis/category'
import { uploadPost } from 'utils/apis/post'
import Cookies from 'js-cookie'
import * as Style from 'styles/pageStyles/newPostStyle'

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
  const router = useRouter()
  const isInitialMount = useRef(true)
  const { data: categories, isLoading: categoriesLoading } = useGetCategories({
    revalidateOnFocus: false,
  })
  const [fileObject, setFileObject] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [clickedDate, setClikedDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [score, setScore] = useState(0)
  const [textareaValue, setTextareaValue] = useState([])
  const [toggleModal, setToggleModal] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const handleChange = (value) => {
    setFileObject(value)
  }

  const handleSubmit = async (e) => {
    try {
      e?.preventDefault()

      const necessities = {
        category: selectedCategory.categoryId,
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
            autoClose: 2000,
          })
        }
      } else {
        await setLoading(true)
        const formData = new FormData()
        const requestObject = {
          // categoryId: 1,
          categoryId: selectedCategory.categoryId,
          selectedDate: clickedDate,
          content: textareaValue[0],
          score,
        }

        formData.set('request', JSON.stringify(requestObject))
        formData.set('file', fileObject || new File([''], 'empty.txt'))
        await uploadPost(formData)
        setTextareaValue(['', false])
        router.push('/posts/2021')
        // TODO: posts/all로 라우팅 후 등록되었다고 toast 띄우기
      }
    } catch (error) {
      console.error(error.message)
    }
    setLoading(false)
  }

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
    if (!Cookies.get('user')) {
      router.push('/login')
    }
  }, [])

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
            data={categories}
            height={45}
            isObj
            onChange={setSelectedCategory}
            isNew
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
