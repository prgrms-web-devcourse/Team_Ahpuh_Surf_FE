import { useEffect, useRef, useState } from 'react'
import { updateUser, useGetUser } from 'utils/apis/user'
import { Text, Modal } from '../../base'
import * as Style from './style'
import useForm from 'hooks/useForm'

const EditAboutMe = ({ userId, visible, toggle }) => {
  const modalArgs = {
    on: visible,
    toggle: () => toggle(),
  }
  const textArgs = {
    size: 25,
    strong: true,
    block: true,
    placeholder: 'input URL',
  }
  const urlArgs = {
    type: 'text',
    name: 'url',
  }
  const contentArgs = {
    name: 'aboutMe',
    cols: '30',
    rows: '15',
    placeholder: 'tell me about you',
  }
  const urlRef = useRef(null)
  const aboutMeRef = useRef(null)

  const [userData, setUserData] = useState(null)
  const { data } = useGetUser(userId)
  useEffect(() => {
    setUserData(data)
  }, [])
  useEffect(() => {}, [userData])
  useEffect(() => {
    if (!urlRef && !aboutMeRef) {
      urlRef.current.value = userData?.url
      aboutMeRef.current.value = userData?.aboutMe
    }
  }, [visible])

  const { values, isLoading, errors, handleSubmit, handleChange } = useForm({
    initialValues: {
      url: userData?.url,
      aboutMe: userData?.aboutMe,
      userName: userData?.userName,
      password: null,
      accoutPublic: userData?.accountPublic,
    },
    onSubmit: async () => {
      // console.log('for test in onsubmit', userData)

      const { data } = await updateUser({
        request: {
          url: urlRef.current.value,
          aboutMe: aboutMeRef.current.value,
          userName: userData.userName,
          password: null,
          accountPublic: userData.accountPublic,
        },
        file: '',
      })
      console.log(data) // 요청 오는거 체크한 담에, statusCode보고 안내 메시지 뭐 보낼지 판별하는 로직 추가하기
      toggle()
    },
    validate: () => {
      return {}
    }, // 이부분은 별도의 validation을 요구하는 부분은 아닌것 같기에...
  })

  return (
    <Modal {...modalArgs}>
      <Style.Container>
        <Text {...textArgs}>url</Text>
        <Style.UrlInput {...urlArgs} ref={urlRef} />
        <Text {...textArgs}>content</Text>
        <Style.Content {...contentArgs} ref={aboutMeRef} />
        <div style={{ display: 'flex', width: '100%' }}>
          <Style.Button style={{ marginRight: 10 }} onClick={() => toggle()}>
            Cancel
          </Style.Button>
          <Style.Button style={{ marginLeft: 10 }} onClick={handleSubmit}>
            Modify
          </Style.Button>
        </div>
      </Style.Container>
    </Modal>
  )
}

export default EditAboutMe
