import { toast, ToastContainer } from 'react-toastify'
import { Text, Modal, Input } from 'components/base'
import { useCallback, useRef, useState } from 'react'
import * as Form from 'styles/pageStyles/signUpStyle'
import dynamic from 'next/dynamic'
import { useToggle } from 'hooks'
import { shuffle } from 'utils/common/shuffle'
import theme from 'styles/theme'
import { useGetCategories, uploadCategory } from 'utils/apis/category'
import { mutate } from 'swr'
import { useGetCategoriesPath } from 'constants/apiPath'
import { maxCategories } from 'constants/inputLength'
import * as Style from './style'

const Picker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
})

const AddSurfModal = ({ toggleModal, setToggleModal }) => {
  const { data: categories, isLoading: categoriesLoading } = useGetCategories({
    revalidateOnFocus: false,
  })
  const TOAST_TITLE_ID = 'toast-title-id'
  const inputRef = useRef(null)
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [toggleEmoji, onToggleEmoji] = useToggle(false)
  const onToggleModal = useCallback(
    () => setToggleModal(() => !toggleModal),
    [toggleModal, setToggleModal],
  )

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject)
    onToggleEmoji()
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const inputValue = inputRef.current.value
      if (inputValue.length > 0 && categories.length < maxCategories) {
        const request = {
          name: `${inputValue} ${chosenEmoji ? chosenEmoji?.emoji : ''}`,
          colorCode: shuffle(Object.values(theme.surfColor)),
        }
        await uploadCategory(request)
        onToggleModal()
        mutate(useGetCategoriesPath)
      } else if (categories.length - 1 === maxCategories) {
        toast.error(`Maximum categories are ${maxCategories}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          toastId: TOAST_TITLE_ID,
        })
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

  return (
    <>
      <ToastContainer />
      <Modal
        on={toggleModal}
        toggle={setToggleModal}
        width={230}
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
            <Form.Label size={20}>Surf Title</Form.Label>
            <Style.InputWrapper>
              <Input
                ref={inputRef}
                placeholder="Enter the title"
                width="100%"
              />
              <Style.EmojiBox>{chosenEmoji?.emoji}</Style.EmojiBox>
            </Style.InputWrapper>
          </Style.FormWrapper>
          <Style.ButtonWrapper>
            <Style.Button
              type="button"
              background="#fff"
              onClick={onToggleModal}>
              cancel
            </Style.Button>
            <Style.Button background="#fff" onClick={handleSubmit}>
              ok
            </Style.Button>
          </Style.ButtonWrapper>
        </Style.ModalInner>
      </Modal>
    </>
  )
}

export default AddSurfModal
