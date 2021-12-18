import { Dropdown } from 'components/base'
import { Post } from 'components/domain'
import dynamic from 'next/dynamic'
import Cookies from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify'
import { useEffect, Children, useState } from 'react'
import * as Style from 'styles/pageStyles/indexStyle'
import { useGetYearScore } from 'utils/apis/post'
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

  const [dataset, setDataset] = useState([])
  const [selectedSurf, setSurf] = useState({ categoryId: null, name: 'All' })
  const [catList, setCatList] = useState([])

  useEffect(() => {
    if (surfData && surfData.length !== 0) {
      const allData = surfData?.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      console.log(allData)
      setDataset(allData)
    }
  }, [surfData])

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
          <Dropdown
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
            DUMMY_DATA_POST.map(
              ({ date, categoryName, score, title, content, profileImage }) => (
                // eslint-disable-next-line react/jsx-key
                <Post
                  height={100}
                  date={date}
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
