import { useEffect, useRef } from 'react'
import { updateUser } from 'utils/apis/user'
import useForm from 'hooks/useForm'
import { toast, ToastContainer } from 'react-toastify'
import { Text, Modal } from '../../base'
import * as Style from './style'

const EditAboutMe = ({ visible, toggle, userData, setUrl, setAboutMe }) => {
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
  const toastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
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
  const { handleSubmit } = useForm({
    initialValues: {
      url: userData?.url,
      aboutMe: userData?.aboutMe,
      userName: userData?.userName,
      password: null,
      accoutPublic: userData?.accountPublic,
    },
    onSubmit: async () => {
      const formData = new FormData()
      const requestObject = {
        userName: userData?.userName,
        password: null,
        url: urlRef.current.value,
        aboutMe: aboutMeRef.current.value,
        accountPublic: userData?.accountPublic,
      }
      formData.set('request', JSON.stringify(requestObject))
      formData.set('file', new File([''], 'empty.txt'))
      const res = await updateUser(formData)
      if (res.status === 200) {
        toast('설정사항이 저장되었습니다', toastOptions)
      }

      setUrl(urlRef.current.value)
      setAboutMe(aboutMeRef.current.value)
      toggle()
    },
    validate: () => ({}),
  })

  return (
    <Modal {...modalArgs}>
      <ToastContainer />
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
