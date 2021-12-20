import styled from '@emotion/styled'
import { Avatar, Logo } from 'components/base'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { useGetUser } from 'utils/apis/user'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px 15px;
`

const Header = () => {
  const [uid, setUid] = useState(null)
  useEffect(() => {
    const userId =
      Cookies.get('user') && JSON.parse(Cookies.get('user'))?.userId
    setUid(userId)
  }, [])
  const { data: profileData } = useGetUser(uid)

  if (!profileData) {
    return <p />
  }

  return (
    <HeaderWrapper>
      <Logo width={90} />
      <Avatar
        size={40}
        src={profileData.profilePhotoUrl || '/images/avatarDefault.png'}
      />
    </HeaderWrapper>
  )
}

export default Header
