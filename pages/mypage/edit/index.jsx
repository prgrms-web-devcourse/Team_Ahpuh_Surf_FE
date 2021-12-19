import Profile from 'components/domain/Profile'
import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Input, Text, Toggle, Upload } from 'components/base'
import InputItem from 'components/domain/InputItem'
import { sampleData } from 'utils/SampleData/Mypage'
import * as Style from './style'
import { updateUser } from '../../../utils/apis/user'

const ProfileModification = () => {
  // eslint-disable-next-line import/no-extraneous-dependencies,global-require
  const FormData = require('form-data')
  const result = new FormData()
  const [fileObject, setFileObject] = useState('')

  const { email } = sampleData
  const inputStyle = {
    width: '100%',
    height: 40,
    fontSize: 20,
  }

  const onChangeProfileImage = (value) => {
    setFileObject(value)
  }

  const publicRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)

    // if (data.get('password') !== data.get('passwordConfirm')) {
    //   alert(`password and password confirm don't match`)
    //   return
    // }
    // if (
    //   data.get('username') === '' &&
    //   (data.get('password') === '' || data.get('passwordConfirm') === '')
    // ) {
    //   alert('check again')
    //   return
    // }
    const requestObject = {
      userName: data.get('username'),
      password: data.get('password'),
      accountPublic: publicRef.current.checked,
      url: '',
      aboutMe: '',
    }
    result.set('request', JSON.stringify(requestObject))
    result.set('file', fileObject || new File([''], 'empty.txt'))

    const res = await updateUser(result)
    console.log(res)

    // router.push('/mypage')
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
