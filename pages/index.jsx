import { MainDropdown } from 'components/base'
import { Post } from 'components/domain'
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, Children, useState } from 'react'
import * as Style from 'styles/pageStyles/indexStyle'
import { useGetYearScore , useGetPostAll } from 'utils/apis/post'
import { DUMMY_DATA_POST } from 'constants/PostData'
import { useGetCategories } from 'utils/apis/category'

const ApexChart = dynamic(
  () => import('components/domain/AreaChartComponent'),
  {
    ssr: false,
  },
)

const Main = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    setUser(JSON.parse(Cookies.get('user')))
  }, [])

  const { data: categories } = useGetCategories()
  const { data: surfData } = useGetYearScore(user.userId)
  const { data: allPosts } = useGetPostAll(user.userId, 0)


  const [dataset, setDataset] = useState([])
  const [selectedSurf, setSurf] = useState({ categoryId: null, name: 'All' })
  const [catList, setCatList] = useState([])
  const [postList, setPostList] = useState([])

  useEffect(() => {
    if (surfData && surfData.length !== 0) {
      const allData = surfData?.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      setDataset(allData)
    }
    setPostList(allPosts.values)
    // console.log(postList)
  }, [surfData, allPosts])

  useEffect(() => {
    if (categories && categories.length !== 0) {
      setCatList([
        {
          categoryId: null,
          name: 'All',
        },
        ...categories,
      ])
    }
  }, [categories])

  useEffect(() => {
    console.log(selectedSurf)
  }, [selectedSurf])

  const handleClick = (item) => {
    setSurf(item)
    if (!item.categoryId) {
      const allData = surfData.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      setDataset(allData)
    } else {
      const result = surfData.filter(
        (surf) => surf.categoryId === item.categoryId,
      )
      setDataset([
        {
          data: result[0].postScores,
          name: result[0].categoryName,
        },
      ])
    }
  }

  useEffect(() => {
    if (Cookies.get('isSignup')) {
      toast.success('Signup was sucessful 🎉', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      })
    }
  }, [])

  return (
    <>
      <ToastContainer />
      <Style.MainWrapper>
        <Style.ChartHeader>
          <MainDropdown
            selected={selectedSurf}
            handleClick={handleClick}
            data={catList}
            isObj
            border={false}
          />
        </Style.ChartHeader>
        <Style.ChartWrapper>
          <ApexChart data={dataset} />
        </Style.ChartWrapper>
        <Style.PostListWrapper>
          {Children.toArray(
            postList.map(
              ({
                categoryName,
                // colorCode,
                content,
                // fileUrl,
                // imageUrl,
                // isLiked,
                // likeId,
                // postId,
                score,
                selectedDate,
              }) => (
                // eslint-disable-next-line react/jsx-key
                <Post
                  height={100}
                  date={selectedDate}
                  categoryName={categoryName}
                  score={score}
                  title={title}
                  content={content}
                  profileImage={profileImage}
                />
              ),
            ),
          )}
        </Style.PostListWrapper>
      </Style.MainWrapper>
    </>
  )
}

export default Main
