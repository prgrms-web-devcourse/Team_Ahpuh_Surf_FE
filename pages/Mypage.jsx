import dynamic from 'next/dynamic'
import { sampleXNY1 } from 'components/domain/AreaChartComponent/sampleXNY1'
import { sampleXNY2 } from 'components/domain/AreaChartComponent/sampleXNY2'
import { sampleData } from '../SampleData/Mypage'
import { Avatar, Text } from '../components/base'
import { heatmapSampleData } from '../SampleData/heatmapChart'
import ContentBox from '../components/domain/ContentBox'
import * as Style from './myPageStyle'

const Mypage = () => {
  const avatarArgs = {
    src: sampleData.profilePhotoUrl,
    size: '150%',
    alt: 'avatar',
  }
  const AreaChartComponent = dynamic(
    import('components/domain/AreaChartComponent'),
    { ssr: false },
  )
  const dataset = []
  dataset.push({ data: sampleXNY1, name: 'react' })
  dataset.push({ data: sampleXNY2, name: 'Vue' })

  const HeatmapComponent = dynamic(
    import('components/domain/HeatmapChartComponent'),
    { ssr: false },
  )
  return (
    <Style.Container>
      <Style.Profile>
        <Avatar {...avatarArgs} style={Style.avatarStyle} />
        <Text size={25} strong>
          {sampleData.userName}
        </Text>
        <Text size={15} color="#8D8D8D">
          {sampleData.email}
        </Text>
        <Style.FollowContainer>
          <Style.FollowItem>
            <Text size={36}>{sampleData.followerCount}</Text>
            <Text size={20}>팔로우</Text>
          </Style.FollowItem>
          <Style.FollowItem>
            <Text size={36}>{sampleData.followingCount}</Text>
            <Text size={20}>팔로잉</Text>
          </Style.FollowItem>
        </Style.FollowContainer>
      </Style.Profile>
      <Style.Introduction>
        <Style.Title style={{ display: 'block' }}>자기소개</Style.Title>
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
      <Style.Graph>
        <Style.Title>Main ></Style.Title>
        <AreaChartComponent data={dataset} width="100%" height={300} isMyPage />
      </Style.Graph>
      <Style.Graph>
        <Style.Title>Dashboard ></Style.Title>
        <HeatmapComponent data={heatmapSampleData} width="100%" height="140%" />
      </Style.Graph>
      <ContentBox title="Images" fontSize={20} />
      <ContentBox title="files" fontSize={20} />
    </Style.Container>
  )
}
export default Mypage
