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
