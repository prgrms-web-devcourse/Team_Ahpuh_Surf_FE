import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import { Upload, Text, Textarea, MainDropdown } from 'components/base'
import { DatePicker } from 'components/domain'
import Image from 'next/image'
import UploadImage from 'public/images/upload.svg'
import dynamic from 'next/dynamic'
import { withRouter, useRouter } from 'next/router'
import theme from 'styles/theme'
import { useState, useEffect, useRef } from 'react'
import { checkEmpty } from 'utils/validation'
import { useGetCategories } from 'utils/apis/category'
import { updatePost } from 'utils/apis/post'
import Cookies from 'js-cookie'
import * as Style from 'styles/pageStyles/postEditStyle'

const Slider = dynamic(() => import('components/domain/ScoreSlider'), {
  ssr: false,
})

const AddSurfModalSSR = dynamic(
  () => import('components/domain/AddSurfModal'),
  {
    ssr: false,
  },
)

const Edit = ({ router: { query } }) => {
  const postData = JSON.parse(query.post)
  console.log(postData)
  const router = useRouter()
  const isInitialMount = useRef(true)
  const { data: categories, isLoading: categoriesLoading } = useGetCategories({
    revalidateOnFocus: false,
  })
  const [fileObject, setFileObject] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [clickedDate, setClickedDate] = useState(dayjs().format('YYYY-MM-DD'))
  const [score, setScore] = useState(0)
  const [textareaValue, setTextareaValue] = useState([postData.content, false])
  const [toggleModal, setToggleModal] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [catList, setCatList] = useState([])
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
          categoryId: selectedCategory.categoryId,
          selectedDate: clickedDate,
          content: textareaValue[0],
          score,
        }

        formData.set('request', JSON.stringify(requestObject))
        formData.set('file', fileObject || new File([''], 'empty.txt'))
        const res = await updatePost(postData.postId, formData)
        setTextareaValue(['', false])
        if (res.status === 200) {
          router.back()
        }
        // TODO: posts/all로 라우팅 후 등록되었다고 toast 띄우기
      }
    } catch (error) {
      console.error(error.message)
    }
    setLoading(false)
  }
  const { data: _categories } = useGetCategories()
  useEffect(() => {
    const arr = _categories.filter((i) => i.name === postData.categoryName)
    setSelectedCategory(arr[0])
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
  useEffect(() => {
    if (categories && categories.length !== 0) {
      setCatList([...categories])
    }
  }, [categories])

  const handleClick = (item) => {
    setSelectedCategory(item)
  }
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
                    click or drag file
                  </Text>
                </Style.IconWrapper>
              )}
            </Style.Box>
          )}
        </Upload>
        <Style.OptionWrapper>
          <MainDropdown
            isObj
            data={catList}
            selected={selectedCategory}
            handleClick={handleClick}
            height={45}
          />
          <DatePicker
            onChange={setClickedDate}
            initialValue={postData.selectedDate}
          />
        </Style.OptionWrapper>
        <Slider onChange={setScore} initialScore={postData.postScore} />
      </Style.UpperSide>
      <Style.BottomSide>
        <Textarea value={textareaValue} onChange={setTextareaValue} />
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

export default withRouter(Edit)
