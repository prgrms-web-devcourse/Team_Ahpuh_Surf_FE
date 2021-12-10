import { useEffect, useRef } from 'react'
import { Text, Modal } from '../../base'
import * as Style from './style'

const EditAboutMe = ({ url, aboutMe, visible, toggle }) => {
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
      urlRef.current.value = url
      aboutMeRef.current.value = aboutMe
    }
  }, [visible])

  const handleSubmit = (e) => {
    // TODO: api에 post 기능 추후 추가 예정
    console.log(urlRef.current.value)
    console.log(aboutMeRef.current.value)
    toggle()
  }
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
          <Style.Button
            style={{ marginLeft: 10 }}
            onClick={() => handleSubmit()}>
            Modify
          </Style.Button>
        </div>
      </Style.Container>
    </Modal>
  )
}

export default EditAboutMe
