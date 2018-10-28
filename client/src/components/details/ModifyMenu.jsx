import React, { useState } from 'react';

import { Hamburger, Options, Option, Toggle, Modal } from './modifyMenu.styled';

export default function ModifyMenu() {
  const modifyToggle = useModalToggle();
  const deleteToggle = useModalToggle();

  const ModifyModal = () => <p>This is my modify modal</p>;
  const DeleteModal = () => <p>This is my delete modal</p>;

  return (
    <Hamburger>
      <Options>
        <Option>
          <ModalToggle
            {...modifyToggle}
            togglerText="Modify"
            className="modify"
            modalContent={ModifyModal}
          />
        </Option>
        <Option>
          <ModalToggle
            {...deleteToggle}
            togglerText="Delete"
            className="delete"
            modalContent={DeleteModal}
          />
        </Option>
      </Options>
    </Hamburger>
  );
}

function useModalToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return { isOpen, toggleModal };
}

const ModalToggle = props => (
  <>
    <Toggle onClick={props.toggleModal} className={props.className}>
      {props.togglerText}
    </Toggle>
    <Modal
      isOpen={props.isOpen}
      onBackgroundClick={props.toggleModal}
      onEscapeKeydown={props.toggleModal}
      afterOpen={() => {
        document.querySelector('#closeModal').focus();
      }}
    >
      {props.modalContent()}
      <button id="closeModal" onClick={props.toggleModal}>
        Close
      </button>
    </Modal>
  </>
);
