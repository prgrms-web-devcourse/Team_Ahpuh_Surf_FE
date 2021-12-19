import dynamic from 'next/dynamic'
import { AiTwotoneSetting } from 'react-icons/ai'
import { BsFillBellFill, BsFillPencilFill } from 'react-icons/bs'
import Link from 'next/link'
import { Text } from 'components/base'
import ContentBox from 'components/domain/ContentBox'
import Profile from 'components/domain/Profile'
import { useEffect, useState } from 'react'
import EditAboutMe from 'components/domain/EditAboutMe'
import SkeletonBox from 'components/domain/SkeletonBox'
import useGetUser from 'utils/apis/user/useGetUser'
import FollowModal from 'components/domain/FollowModal'
import useGetPostsCountYear from 'utils/apis/post/useGetPostsCountYear'
import { useToggle } from 'hooks'
import AreaChartModule from 'components/domain/AreaChartModule'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import * as Style from './style'

const Mypage = () => {
  const router = useRouter()
  const [uId, setUid] = useState(null)
  const [isMine, setMine] = useState(false)
  const HeatmapComponent = dynamic(
    import('components/domain/HeatmapChartComponent'),
    { ssr: false },
  )
  const [toggleTabs, setToggleTabs] = useToggle(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!router.isReady) return
    const { userId } = router.query
    const { userId: cookieUId } = Cookies.get('user')
    if (userId === cookieUId) {
      setMine(true)
    }
    setUid(userId)
  }, [router.isReady])
  const { data: profileData } = useGetUser(uId)
  const { data: heatmapData } = useGetPostsCountYear(
    new Date().getFullYear(),
    uId,
  )

  const toggle = () => {
    setVisible(!visible)
  }
  const toggleFollowModal = () => {
    setToggleTabs()
  }
  const handleNotice = () => {
    console.log('click notice')
  }

  if (!profileData || !uId) {
    return <p />
  }
  return (
    <Style.Container>
      <FollowModal
        userId={uId}
        toggleTabs={toggleTabs}
        setToggleTabs={setToggleTabs}
      />
      <EditAboutMe userData={profileData} visible={visible} toggle={toggle} />
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        {isMine && (
          <AiTwotoneSetting
            size={30}
            style={{ marginRight: 5, cursor: 'pointer' }}
            onClick={() => {
              router.push('/mypage/edit')
            }}
          />
        )}

        <BsFillBellFill
          size={30}
          style={{ marginLeft: 5, cursor: 'pointer' }}
          onClick={() => handleNotice()}
        />
      </div>
      <Profile
        profilePhotoUrl={
          profileData?.profilePhotoUrl === null
            ? '/images/avatarDefault.png'
            : profileData?.profilePhotoUrl
        }
        userName={profileData?.userName}
        email={profileData?.email}
      />
      {profileData.accountPublic ? (
        <div>
          <Style.FollowContainer onClick={() => toggleFollowModal()}>
            <Style.FollowItem>
              <Text size={36}>{profileData?.followerCount}</Text>
              <Text size={20}>Follower</Text>
            </Style.FollowItem>
            <Style.FollowItem>
              <Text size={36}>{profileData?.followingCount}</Text>
              <Text size={20}>Following</Text>
            </Style.FollowItem>
          </Style.FollowContainer>
          <Style.Introduction>
            <Style.Title style={{ display: 'block' }}>
              About Me&nbsp;
              {isMine && (
                <BsFillPencilFill
                  size={20}
                  style={{ color: '#8d8d8d', cursor: 'pointer' }}
                  onClick={() => toggle()}
                />
              )}
            </Style.Title>
            <Style.Title>URL: </Style.Title>
            {profileData?.url ? (
              <Style.Title>{profileData?.url}</Style.Title>
            ) : (
              <Style.Title style={{ fontSize: 20, color: '#8D8D8D' }}>
                {isMine && `추가해보세요`}
              </Style.Title>
            )}
            <Style.Content>{profileData?.aboutMe}</Style.Content>
          </Style.Introduction>
          <Style.Graph style={{ width: '100%', height: 350 }}>
            <Link href="/">
              <Style.Title>{`Main >`}</Style.Title>
            </Link>
            <AreaChartModule userId={uId} isMyPage />
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
          <ContentBox title="Images" fontSize={20}>
            <Text color="darkGray">No Data</Text>
          </ContentBox>
          <ContentBox title="files" fontSize={20}>
            <Text color="darkGray">No Data</Text>
          </ContentBox>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            top: 50,
          }}>
          <Text size={20} strong block>
            Information Closed
          </Text>
        </div>
      )}
    </Style.Container>
  )
}

export default Mypage
