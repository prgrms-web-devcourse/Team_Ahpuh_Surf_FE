import Profile from 'components/domain/Profile'
import { useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import { Input, Text, Toggle, Upload } from 'components/base'
import InputItem from 'components/domain/InputItem'
import { sampleData } from 'utils/SampleData/Mypage'
import * as Style from './style'

const ProfileModification = () => {
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require
  const FormData = require('form-data')
  const result = new FormData()
  const router = useRouter()

  const { email } = sampleData
  const inputStyle = {
    width: '100%',
    height: 40,
    fontSize: 20,
  }

  const onChangeProfileImage = useCallback(async (file) => {
    if (file) {
      result.append('image', file)
    } else {
      console.log('no data')
    }
  }, [])

  const publicRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    if (data.get('password') !== data.get('passwordConfirm')) {
      alert(`password and password confirm don't match`)
      return
    }
    if (
      data.get('username') === '' &&
      (data.get('password') === '' || data.get('passwordConfirm') === '')
    ) {
      alert('check again')
      return
    }
    result.append('username', data.get('username'))
    result.append('password', data.get('password'))
    result.append('public', publicRef.current.checked)

    // TODO: 입력값들 formData로 감싼 상태임...api 통해서 새로운 값 받아오면 컴포넌트들 재랜더링 하는 방식으로 처리하기
    // TODO: API 연동 되면 밑에 주석 해제하기
    router.push('/mypage')
  }
  return (
    <Style.Container onSubmit={handleSubmit}>
      <Profile profilePhotoUrl={sampleData.profilePhotoUrl} email={email}>
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
          <Toggle ref={publicRef} />
        </div>
      </div>
      <Style.ButtonSubmit type="submit">submit</Style.ButtonSubmit>
    </Style.Container>
  )
}
export default ProfileModification
