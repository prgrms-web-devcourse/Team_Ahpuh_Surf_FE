import { Posts } from 'utils/SampleData/Posts'
import { Post } from 'components/domain'
import styled from '@emotion/styled'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Month = () => {
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

  // TODO: query로부터 받은 [month] 바탕으로 api에 쿼리 날린뒤 해당 데이터 바탕으로 랜더링 해야 한다
  const router = useRouter()
  const { month } = router.query
  console.log(month)

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
  return (
    <Container>
      <SearchBox>
        <input type='text' placeholder='keyword search...' ref={inputRef} />
        <BsSearch className='btnSearch' onClick={handleSearch} />
      </SearchBox>
      {Posts.map(({
                    categoryName,
                    content,
                    score,
                    selectedDate,
                    colorCode,
                  }
      ) => (
        <Post
          score={score}
          backgroundColor={colorCode}
          categoryName={categoryName}
          content={content}
          createdAt={selectedDate}
          like={false}
          style={{ marginTop: 10, marginBottom: 10 }}
        />
      ))}
    </Container>)
}
export default Month