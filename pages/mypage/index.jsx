import dynamic from 'next/dynamic'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillBellFill, BsFillPencilFill } from 'react-icons/bs'
import Link from 'next/link'
import { MainDropdown, Text } from 'components/base'
import ContentBox from 'components/domain/ContentBox'
import Profile from 'components/domain/Profile'
import { useEffect, useState } from 'react'
import EditAboutMe from 'components/domain/EditAboutMe'
import Cookies from 'js-cookie'
import SkeletonBox from 'components/domain/SkeletonBox'
import useGetUser from 'utils/apis/user/useGetUser'
import FollowModal from 'components/domain/FollowModal'
import useGetPostsCountYear from 'utils/apis/post/useGetPostsCountYear'
import * as Style from './style'
import { useToggle } from '../../hooks'
import { useGetPostAll, useGetYearScore } from '../../utils/apis/post'
import { useGetCategories } from '../../utils/apis/category'

const Mypage = () => {
  const AreaChartComponent = dynamic(
    import('components/domain/AreaChartComponent'),
    { ssr: false },
  )
  const HeatmapComponent = dynamic(
    import('components/domain/HeatmapChartComponent'),
    { ssr: false },
  )
  const [toggleTabs, setToggleTabs] = useToggle(false)
  const [visible, setVisible] = useState(false)

  const [uId, setUid] = useState(null)
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])
  const { data } = useGetUser(uId)
  const { data: heatmapData } = useGetPostsCountYear(
    new Date().getFullYear(),
    uId,
  )

  const { data: categories } = useGetCategories()
  const { data: surfData } = useGetYearScore(uId)
  const { data: allPosts } = useGetPostAll(uId, 0)

  const [dataset, setDataset] = useState([])
  const [selectedSurf, setSurf] = useState({ categoryId: null, name: 'All' })
  const [catList, setCatList] = useState([])

  useEffect(() => {
    if (surfData && surfData.length !== 0) {
      const allData = surfData?.map((surf) => ({
        data: surf.postScores,
        name: surf.categoryName,
      }))
      setDataset(allData)
    }
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
  const toggle = () => {
    setVisible(!visible)
  }
  const toggleFollowModal = () => {
    setToggleTabs()
  }
  const handleNotice = () => {
    console.log('click notice')
  }

  if (!data || !uId) {
    return <p />
  }
  return (
    <Style.Container>
      <FollowModal
        userId={uId}
        toggleTabs={toggleTabs}
        setToggleTabs={setToggleTabs}
      />
      <EditAboutMe userData={data} visible={visible} toggle={toggle} />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Link href="/mypage/edit">
          <AiTwotoneSetting
            size={30}
            style={{ marginRight: 5, cursor: 'pointer' }}
          />
        </Link>
        <BsFillBellFill
          size={30}
          style={{ marginLeft: 5, cursor: 'pointer' }}
          onClick={() => handleNotice()}
        />
      </div>
      <Profile
        profilePhotoUrl={
          data?.profilePhotoUrl === null
            ? 'https://picsum.photos/200'
            : data?.profilePhotoUrl
        }
        userName={data?.userName}
        email={data?.email}
      />
      <Style.FollowContainer onClick={() => toggleFollowModal()}>
        <Style.FollowItem>
          <Text size={36}>{data?.followerCount}</Text>
          <Text size={20}>Follower</Text>
        </Style.FollowItem>
        <Style.FollowItem>
          <Text size={36}>{data?.followingCount}</Text>
          <Text size={20}>Following</Text>
        </Style.FollowItem>
      </Style.FollowContainer>
      <Style.Introduction>
        <Style.Title style={{ display: 'block' }}>
          About Me&nbsp;
          <BsFillPencilFill
            size={20}
            style={{ color: '#8d8d8d', cursor: 'pointer' }}
            onClick={() => toggle()}
          />
        </Style.Title>
        <Style.Title>URL: </Style.Title>
        {data?.url ? (
          <Style.Title>{data?.url}</Style.Title>
        ) : (
          <Style.Title style={{ fontSize: 20, color: '#8D8D8D' }}>
            추가해보세요
          </Style.Title>
        )}
        <Style.Content>{data?.aboutMe}</Style.Content>
      </Style.Introduction>
      <Style.Graph style={{ width: '100%', height: 350 }}>
        <Link href="/">
          <Style.Title>{`Main >`}</Style.Title>
        </Link>
        <MainDropdown
          height={30}
          fontSize={15}
          width={100}
          selected={selectedSurf}
          handleClick={handleClick}
          data={catList}
          isObj
          border
          style={{ marginTop: 10 }}
        />
        <div style={{ position: 'relative', top: 15 }}>
          <Style.AreaChartSkeleton>
            <Text size={30} color="darkGray">
              Loading
            </Text>
          </Style.AreaChartSkeleton>
          <AreaChartComponent
            data={dataset}
            isMyPage
            style={{ marginTop: 10 }}
          />
        </div>
      </Style.Graph>

      <Link href="/dashboard">
        <Style.Title>{`Dashboard >`}</Style.Title>
      </Link>
      <Style.Graph style={{ width: '100%', height: 300 }}>
        <SkeletonBox
          position="absolute"
          width="100%"
          height={190}
          borderRadius={10}
          style={{ top: 20, left: 0, marginBottom: 10 }}
          text="Loading"
        />
        <HeatmapComponent data={heatmapData} height="370px" />
      </Style.Graph>
      <ContentBox title="Images" fontSize={20} />
      <ContentBox title="files" fontSize={20} />
    </Style.Container>
  )
}

export default Mypage
