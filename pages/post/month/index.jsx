import { Posts } from 'utils/SampleData/Posts'
import { Post } from 'components/domain'
import styled from '@emotion/styled'
import { BsSearch } from 'react-icons/bs'
import { useRef } from 'react'

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
                  },
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