import { useEffect, useMemo, useRef } from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'
import * as Style from './style'

const Modal = ({ toggle, on, closeBtn, width, height, children }) => {
  if (!on) return null

  const modalDim = useRef(null)
  const modalClose = useRef(null)

  const handleCloseModal = (e) => {
    const btn = e.target.closest('button')
    const closeModalElement = [modalDim.current, modalClose.current]
    if (
      closeModalElement.includes(e.target) ||
      (btn === modalClose.current && btn !== null)
    ) {
      toggle(false)
    }
  }

  // textarea에 옮길 코드

  // const handleSubmitComment = (e) => {
  //   if (e.target.value === '\n') return
  //   if (e.key === 'Enter' && !e.shiftKey) {
  //     e.preventDefault()
  //     writeComment(e.target.value)
  //     e.target.value = ''
  //   }
  // }

  const el = useMemo(() => document.createElement('div'), [])

  useEffect(() => {
    document.body.appendChild(el)
    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDom.createPortal(
    <Style.ModalDim ref={modalDim} onClick={handleCloseModal}>
      <Style.ModalContainer width={width} height={height} closeBtn={closeBtn}>
        {closeBtn ? (
          <Style.ModalClose ref={modalClose} onClick={handleCloseModal}>
            <IoIosClose size={32} />
          </Style.ModalClose>
        ) : null}
        {children}
      </Style.ModalContainer>
    </Style.ModalDim>,
    el,
  )
}

Modal.propTypes = {
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  closeBtn: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

Modal.defaultProps = {
  closeBtn: true,
  width: 500,
  height: 500,
}

export default Modal
