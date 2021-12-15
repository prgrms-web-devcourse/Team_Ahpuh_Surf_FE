import dynamic from 'next/dynamic'
import { areaChartComponent1 } from 'utils/SampleData/AreaChartComponent1' // 일년치 게시글 점수 조회 .. api 미완성 상태
import { areaChartComponent2 } from 'utils/SampleData/AreaChartComponent2'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillBellFill, BsFillPencilFill } from 'react-icons/bs'
import Link from 'next/link'
import { Text } from 'components/base'
import ContentBox from 'components/domain/ContentBox'
import Profile from 'components/domain/Profile'
import { useEffect, useState } from 'react'
import EditAboutMe from 'components/domain/EditAboutMe'
import { heatmapSampleData } from 'utils/SampleData/heatmapChart' // 일년치 게시글 점수 조회
// import { sampleData } from 'utils/SampleData/Mypage' // 회원 정보 조회
import Cookies from 'js-cookie'
import SkeletonBox from 'components/domain/SkeletonBox'
import useGetUser from 'utils/apis/user/useGetUser'
import * as Style from './style'

const Mypage = () => {
  const AreaChartComponent = dynamic(
    import('components/domain/AreaChartComponent'),
    { ssr: false },
  )
  const HeatmapComponent = dynamic(
    import('components/domain/HeatmapChartComponent'),
    { ssr: false },
  )
  const [visible, setVisible] = useState(false)

  const dataset = []
  dataset.push({ data: areaChartComponent1, name: 'react' })
  dataset.push({ data: areaChartComponent2, name: 'Vue' })

  const [uId, setUid] = useState(null)
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])
  const { data } = useGetUser(uId)
  if (!data) {
    return <p />
  }

  const toggle = () => {
    setVisible(!visible)
  }
  const handleNotice = () => {
    console.log('click notice')
  }

  return (
    <Style.Container>
      <EditAboutMe userData={data} visible={visible} toggle={toggle} />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <Link href="/mypage/edit">
          <AiTwotoneSetting size={30} style={{ marginRight: 5 }} />
        </Link>
        <BsFillBellFill
          size={30}
          style={{ marginLeft: 5 }}
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
      <Style.FollowContainer>
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
      <Style.Graph style={{ width: '100%', height: 380 }}>
        <Link href="/">
          <Style.Title>{`Main >`}</Style.Title>
        </Link>
        <Style.AreaChartSkeleton>
          <Text size={30} color="darkGray">
            Loading
          </Text>
        </Style.AreaChartSkeleton>
        <AreaChartComponent data={dataset} isMyPage />
      </Style.Graph>
      <Link href="/dashboard">
        <Style.Title>{`Dashboard >`}</Style.Title>
      </Link>
      <Style.Graph>
        <SkeletonBox
          position="absolute"
          width="100%"
          height={190}
          borderRadius={10}
          style={{ top: 20, left: 0, marginBottom: 10 }}
          text="Loading"
        />
        <HeatmapComponent data={heatmapSampleData} height="370px" />
      </Style.Graph>
      <ContentBox title="Images" fontSize={20} />
      <ContentBox title="files" fontSize={20} />
    </Style.Container>
  )
}

export default Mypage
