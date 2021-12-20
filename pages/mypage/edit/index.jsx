import Profile from 'components/domain/Profile'
import { useEffect, useRef, useState } from 'react'
import { Input, Text, Toggle, Upload } from 'components/base'
import InputItem from 'components/domain/InputItem'
import Cookies from 'js-cookie'
import { toast, ToastContainer } from 'react-toastify'
import { updateUser } from 'utils/apis/user'
import useGetUser from 'utils/apis/user/useGetUser'
import { useRouter } from 'next/router'
import { RiArrowGoBackLine } from 'react-icons/ri'
import * as Style from 'styles/pageStyles/mypageEditStyle'

const ProfileModification = () => {
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require
  const FormData = require('form-data')
  const router = useRouter()
  const result = new FormData()
  const [fileObject, setFileObject] = useState('')

  const inputStyle = {
    width: '100%',
    height: 40,
    fontSize: 20,
  }
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
  }
  const [uId, setUid] = useState(null)
  useEffect(() => {
    const { userId } = JSON.parse(Cookies.get('user'))
    setUid(userId)
  }, [])
  const { data: profileData } = useGetUser(uId, { revalidateOnFocus: false })

  const onChangeProfileImage = (value) => {
    setFileObject(value)
    console.log(value)
  }

  const publicRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    if (!(data.get('password') === data.get('passwordConfirm'))) {
      toast('비밀번호, 비밀번호 확인이 일치 하지 않습니다', toastOptions)
      return
    }
    const requestObject = {
      userName: data.get('username') || profileData.userName,
      password: data.get('password') || null,
      accountPublic: publicRef.current.checked,
      url: profileData.url,
      aboutMe: profileData.aboutMe,
    }
    result.set('request', JSON.stringify(requestObject))
    result.set('file', fileObject || new File([''], 'empty.txt'))
    const res = await updateUser(result)
    if (res.status === 200) {
      router.push('/mypage')
    }
  }
  const handleBack = () => {
    router.push('/mypage')
  }
  if (!profileData) {
    return <p />
  }
  return (
    <div>
      <RiArrowGoBackLine
        size={30}
        onClick={handleBack}
        style={{ position: 'absolute', left: 15 }}
      />
      <Style.Container onSubmit={handleSubmit}>
        <ToastContainer />
        <Profile
          profilePhotoUrl={profileData?.profilePhotoUrl}
          email={profileData?.email}>
          <Upload onChange={onChangeProfileImage}>
            <Style.ButtonPlus>+</Style.ButtonPlus>
          </Upload>
        </Profile>
        <div style={{ width: '100%' }}>
          <InputItem title="username">
            <Input {...inputStyle} placeholder="username" name="username" />
          </InputItem>
          <InputItem title="password">
            <Input
              {...inputStyle}
              placeholder="optional"
              name="password"
              type="password"
            />
          </InputItem>
          <InputItem title="password Confirm">
            <Input
              {...inputStyle}
              placeholder="optional"
              name="passwordConfirm"
              type="password"
            />
          </InputItem>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Text size={20} style={{ width: '18%' }}>
              public
            </Text>
            <Toggle ref={publicRef} isToggle />
          </div>
        </div>
        <Style.ButtonSubmit type="submit">submit</Style.ButtonSubmit>
      </Style.Container>
    </div>
  )
}
export default ProfileModification
