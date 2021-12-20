import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Text } from 'components/base'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { DashboardCard } from 'components/domain'
import SkeletonBox from 'components/domain/SkeletonBox'
import { useGetDashboard } from 'utils/apis/category'
import useGetPostsCountYear from 'utils/apis/post/useGetPostsCountYear'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { useRouter } from 'next/router'
import * as Style from 'styles/pageStyles/dashboardStyle'

const Dashboard = () => {
  const averageBoxStyle = {
    display: 'flex',
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  }
  const router = useRouter()
  const [uid, setUid] = useState(null)
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])
  const { data: CategoryScore } = useGetDashboard(uid)
  const { data: heatmapData } = useGetPostsCountYear(
    new Date().getFullYear(),
    uid,
  )
  const getAvgScore = () => {
    if (!CategoryScore) {
      return 0
    }
    return CategoryScore.map((data) => data.averageScore).reduce(
      (avg, value, _, { length }) => avg + value / length,
      0,
    )
  }

  const RadialChart = dynamic(
    import('components/domain/RadialBarChartComponent'),
    {
      ssr: false,
    },
  )
  const HeatmapChart = dynamic(
    import('components/domain/HeatmapChartComponent'),
    {
      ssr: false,
    },
  )
  const handleBack = () => {
    router.push('/mypage')
  }
  if (!CategoryScore) {
    return <p />
  }
  return (
    <Style.Container>
      <RiArrowGoBackLine
        size={30}
        onClick={handleBack}
        style={{ position: 'absolute', left: 15, top: 70 }}
      />
      <Style.HorizontalBox>
        <Style.Box width="70%" style={{ padding: 10 }}>
          <div>You Made</div>
          <div>
            <span style={{ padding: 10, fontSize: 60 }}>
              {CategoryScore.length}
            </span>
            surfs
          </div>
        </Style.Box>
        <Style.Box width="30%">
          <Image
            src="https://picsum.photos/300/300"
            width="100%"
            height="100%"
            layout="responsive"
            alt="image"
          />
        </Style.Box>
      </Style.HorizontalBox>
      <Style.Box width="100%" style={averageBoxStyle}>
        <div>
          <div style={{ position: 'relative', left: 10, fontSize: 30 }}>
            your
          </div>
          <div style={{ fontSize: 40 }}>average</div>
          <div style={{ position: 'relative', left: 40, fontSize: 30 }}>
            score
          </div>
        </div>
        <div style={{ fontSize: 70 }}>{Math.floor(getAvgScore())}</div>
      </Style.Box>
      <Style.Graph style={{ height: 350, width: '80%' }}>
        <SkeletonBox
          position="absolute"
          width="100%"
          height={300}
          borderRadius={10}
          style={{ top: 20, marginBottom: 10 }}
          text="Loading"
          color="darkGray"
        />
        <RadialChart
          data={CategoryScore}
          height={380}
          style={{ marginBottom: 20 }}
        />
      </Style.Graph>
      <Text
        size={40}
        strong
        block
        style={{ marginTop: 20, alignSelf: 'start' }}>
        Surfing STAT
      </Text>
      <Style.Graph style={{ height: 300, width: '80%', right: 40 }}>
        <SkeletonBox
          position="absolute"
          width="100%"
          height={190}
          borderRadius={10}
          style={{ top: 20, left: 0, marginBottom: 10 }}
          text="Loading"
          color="darkGray"
        />
        <HeatmapChart data={heatmapData} height="370px" />
      </Style.Graph>
      <div style={{ width: '100%' }}>
        {CategoryScore.map(
          ({ categoryId, name, postCount, averageScore }, index) => (
            <div key={categoryId}>
              {index === 2 && (
                <Style.Box
                  style={{ width: '99%', border: 'none', marginBottom: 20 }}>
                  <Image
                    src="/images/surfPapa.png"
                    layout="responsive"
                    width="100%"
                    height={50}
                    alt="image"
                  />
                </Style.Box>
              )}
              <DashboardCard
                categoryName={name}
                score={averageScore}
                recordAmount={postCount}
              />
            </div>
          ),
        )}
      </div>
    </Style.Container>
  )
}
export default Dashboard
