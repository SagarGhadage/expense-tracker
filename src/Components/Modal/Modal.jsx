import React from 'react'
import Modal from 'react-modal';
import style from './Modal.module.css'
Modal.setAppElement("#root");
function Modals({isOpen,children,contentLabel,setIsOpen}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={(prev) => {setIsOpen(!prev)}}
        className={style.modal}
        contentLabel={contentLabel}
      >
        {children}
      </Modal>
    </div>
  )
}

export default Modals