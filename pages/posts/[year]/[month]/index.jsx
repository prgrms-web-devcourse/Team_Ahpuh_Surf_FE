import { Posts } from 'utils/SampleData/Posts'
import { Post } from 'components/domain'
import styled from '@emotion/styled'
import { BsSearch } from 'react-icons/bs'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useGetPostsMonth } from 'utils/apis/post'
import { RiArrowGoBackLine } from 'react-icons/ri'

const Container = styled.div`
  margin: 20px;
`
const SearchBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 70%;

  & input {
    margin-right: 15px;
    padding-left: 10px;
    border-radius: 5px;
    height: 40px;
    width: 100%;
    font-size: 20px;
  }

  & .btnSearch {
    position: absolute;
    right: 25px;
  }
`

const Month = () => {
  const [selectedMonth, setMonth] = useState(null)
  const [selectedYear, setYear] = useState(null)
  // const [postList, setPostList] = useState(null)

  // TODO: query로부터 받은 [month] 바탕으로 api에 쿼리 날린뒤 해당 데이터 바탕으로 랜더링 해야 한다
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
    const { month, year } = router.query
    setMonth(month)
    setYear(year)
  }, [router.isReady])

  const { data: postList } = useGetPostsMonth(2021, selectedMonth)

  const inputRef = useRef(null)
  const handleSearch = () => {
    if (inputRef.current.value) {
      inputRef.current.value = ''

      // TODO: api 요청으로 변경하기
      console.log(value)
    } else {
      console.log('empty')
    }
  }
  const handleBack = () => {
    router.push(`/posts/${selectedYear}`)
  }
  if (!selectedMonth || !postList) {
    return <div />
  }
  return (
    <Container>
      <RiArrowGoBackLine
        size={30}
        onClick={handleBack}
        style={{ position: 'absolute', left: 15, top: 70 }}
      />
      <SearchBox>
        <input type="text" placeholder="keyword search..." ref={inputRef} />
        <BsSearch className="btnSearch" onClick={handleSearch} />
      </SearchBox>
      {postList?.map(
        ({ categoryName, content, score, selectedDate, colorCode, postId }) => (
          <Post
            key={postId}
            postId={postId}
            score={score}
            colorCode={colorCode}
            categoryName={categoryName}
            content={content}
            createdAt={selectedDate}
            like={false}
            style={{ marginTop: 10, marginBottom: 10 }}
          />
        ),
      )}
    </Container>
  )
}
export default Month
