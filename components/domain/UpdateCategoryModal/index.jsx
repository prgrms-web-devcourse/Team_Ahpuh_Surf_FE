import { toast } from 'react-toastify'
import { Text, Modal, Input, Toggle } from 'components/base'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as Form from 'styles/pageStyles/signUpStyle'
import dynamic from 'next/dynamic'
import { useToggle } from 'hooks'
import { shuffle } from 'utils/common/shuffle'
import theme from 'styles/theme'
import { updateCategory } from 'utils/apis/category'
import { mutate } from 'swr'
import { useGetCategoriesPath } from 'constants/apiPath'
import styled from '@emotion/styled'
import { categoryLength } from 'constants/inputLength'
import * as Style from '../AddSurfModal/style'

const Picker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
})

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  padding-bottom: 10px;
  & > input {
    padding-right: 50px;
  }

  & > label {
    flex-basis: 50px;
    flex-shrink: 0;
  }
`

const AddCategoryModal = ({ toggleModal, setToggleModal, categoryId }) => {
  const TOAST_TITLE_ID = 'toast-title-id'
  const inputRef = useRef(null)
  const toggleRef = useRef(null)
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [toggleEmoji, onToggleEmoji] = useToggle(false)
  const [isPublic, setIsPublic] = useState(true)

  const onToggleModal = useCallback(
    () => setToggleModal(() => !toggleModal),
    [toggleModal, setToggleModal],
  )

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
    onToggleEmoji()
  }

  const onChange = (e) => {
    setIsPublic(e.target.checked)
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const inputValue = inputRef.current.value

      if (inputValue.length > 0) {
        const payload = {
          name: `${inputValue} ${chosenEmoji ? chosenEmoji?.emoji : ''}`,
          isPublic,
          colorCode: shuffle(Object.values(theme.surfColor)),
        }
        await updateCategory(categoryId, payload)
        onToggleModal()
        mutate(useGetCategoriesPath)
      } else {
        toast.error('Please enter surf title', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          toastId: TOAST_TITLE_ID,
        })
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  return (
    <Modal
      on={toggleModal}
      toggle={setToggleModal}
      width={280}
      height={350}
      closeBtn={false}>
      <Style.ModalInner onSubmit={handleSubmit}>
        <Style.SelectEmoji>
          <Text
            strong
            size={25}
            style={{ flexShrink: 0, paddingRight: '10px' }}>
            Surf Emoji
          </Text>
          <div style={{ position: 'relative', width: '100%' }}>
            <Style.Button
              type="button"
              width="100%"
              height={35}
              onClick={onEmojiClick}>
              select
            </Style.Button>

            {toggleEmoji && (
              <Picker
                onEmojiClick={onEmojiClick}
                pickerStyle={{
                  position: 'absolute',
                  top: 40,
                  right: -45,
                  zIndex: 999,
                }}
              />
            )}
          </div>
        </Style.SelectEmoji>
        <Style.FormWrapper>
          <InputWrapper>
            <Form.Label htmlFor="title" size={20}>
              title
            </Form.Label>
            <Input
              id="title"
              ref={inputRef}
              placeholder="Enter the title"
              width="100%"
              maxLength={categoryLength}
            />
            <Style.EmojiBox>{chosenEmoji?.emoji}</Style.EmojiBox>
          </InputWrapper>
          <InputWrapper>
            <Form.Label htmlFor="public" size={20}>
              public
            </Form.Label>
            <Toggle ref={toggleRef} isToggle onChange={onChange} />
          </InputWrapper>
        </Style.FormWrapper>
        <Style.ButtonWrapper>
          <Style.Button type="button" background="#fff" onClick={onToggleModal}>
            cancel
          </Style.Button>
          <Style.Button background="#fff" onClick={handleSubmit}>
            ok
          </Style.Button>
        </Style.ButtonWrapper>
      </Style.ModalInner>
    </Modal>
  )
}

export default AddCategoryModal
