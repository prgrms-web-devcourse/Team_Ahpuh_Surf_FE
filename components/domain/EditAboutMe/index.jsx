import { useEffect, useRef } from 'react'
import { updateUser } from 'utils/apis/user'
import useForm from 'hooks/useForm'
import { Text, Modal } from '../../base'
import * as Style from './style'

const EditAboutMe = ({ visible, toggle, userData }) => {
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

  useEffect(() => {
    if (!urlRef && !aboutMeRef) {
      urlRef.current.value = userData?.url
      aboutMeRef.current.value = userData?.aboutMe
    }
  }, [visible])

  if (!userData) {
    return <p />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
      // console.log(urlRef.current.value)
      // console.log(aboutMeRef.current.value)

      // FIXME: test console
      console.log({
        request: {
          userName: userData?.userName,
          password: null,
          url: urlRef.current.value,
          aboutMe: aboutMeRef.current.value,
          accountPublic: userData?.accountPublic,
        },
        file: null,
      })

      // FIXME API 완성되면 테스트 해보기
      const res = await updateUser({
        request: {
          userName: userData?.userName,
          password: null,
          url: urlRef.current.value,
          aboutMe: aboutMeRef.current.value,
          accountPublic: userData?.accountPublic,
        },
        file: null,
      })
      console.log(res) // 요청 오는거 체크한 담에, statusCode보고 안내 메시지 뭐 보낼지 판별하는 로직 추가하기
      toggle()
    },
    validate: () => ({}), // 이부분은 별도의 validation을 요구하는 부분은 아닌것 같기에...
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
