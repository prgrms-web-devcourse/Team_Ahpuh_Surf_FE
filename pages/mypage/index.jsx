import dynamic from 'next/dynamic'
import { areaChartComponent1 } from 'utils/SampleData/AreaChartComponent1'
import { areaChartComponent2 } from 'utils/SampleData/AreaChartComponent2'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillBellFill, BsFillPencilFill } from 'react-icons/bs'
import Link from 'next/link'
import { Text } from 'components/base'
import ContentBox from 'components/domain/ContentBox'
import Profile from 'components/domain/Profile'
import { useState } from 'react'
import EditAboutMe from 'components/domain/EditAboutMe'
import { heatmapSampleData } from 'utils/SampleData/heatmapChart'
import { sampleData } from 'utils/SampleData/Mypage'
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

  const dataset = []
  dataset.push({ data: areaChartComponent1, name: 'react' })
  dataset.push({ data: areaChartComponent2, name: 'Vue' })

  // modal 보이는지 여부 관리
  const [visible, setVisible] = useState(false)
  const toggle = () => {
    setVisible(!visible)
  }

  const handleNotice = () => {
    console.log('click notice')
  }

  return (
    <Style.Container>
      <EditAboutMe
        url={sampleData.url}
        aboutMe={sampleData.aboutMe}
        visible={visible}
        toggle={toggle}
      />
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
        profilePhotoUrl={sampleData.profilePhotoUrl}
        userName={sampleData.userName}
        email={sampleData.email}
      />
      <Style.FollowContainer>
        <Style.FollowItem>
          <Text size={36}>{sampleData.followerCount}</Text>
          <Text size={20}>Follower</Text>
        </Style.FollowItem>
        <Style.FollowItem>
          <Text size={36}>{sampleData.followingCount}</Text>
          <Text size={20}>Following</Text>
        </Style.FollowItem>
      </Style.FollowContainer>
      <Style.Introduction>
        <Style.Title style={{ display: 'block' }}>
          About Me&nbsp;
          <BsFillPencilFill
            size={20}
            style={{ color: '#8d8d8d' }}
            onClick={() => toggle()}
          />
        </Style.Title>
        <Style.Title>URL: </Style.Title>
        {sampleData.url ? (
          <Style.Title>{sampleData.url}</Style.Title>
        ) : (
          <Style.Title style={{ fontSize: 20, color: '#8D8D8D' }}>
            추가해보세요
          </Style.Title>
        )}
        <Style.Content>{sampleData.aboutMe}</Style.Content>
      </Style.Introduction>
      <Style.Graph style={{width:'100%',height:380}}>
        <Style.Title>Main ></Style.Title>
        <Style.AreaChartSkeleton>
          <Text size={30} color='darkGray'>Loading</Text>
        </Style.AreaChartSkeleton>
        <AreaChartComponent data={dataset} isMyPage />
      </Style.Graph>
      <Style.Graph style={{width:'100%',height:270,marginBottom:80}}>
        <Style.Title>Dashboard ></Style.Title>
        {/* TODO: 서버 연결시 해당 스캘래톤 로딩시간에 맞춰서 없애는 로직 추가해야 한다*/}
        {/*<Style.HeatmapSkeleton>*/}
        {/*  <Text size={30} color='darkGray'>Loading</Text>*/}
        {/*</Style.HeatmapSkeleton>*/}
        <HeatmapComponent
          data={heatmapSampleData}
          width="370px"
          height="250px"
        />
      </Style.Graph>
      <ContentBox title="Images" fontSize={20} />
      <ContentBox title="files" fontSize={20} />
    </Style.Container>
  )
}
export default Mypage
