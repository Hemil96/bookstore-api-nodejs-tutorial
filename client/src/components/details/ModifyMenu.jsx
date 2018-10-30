import React, { useState } from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';

import {
  Hamburger,
  Options,
  Option,
  Toggle,
  ModalContent,
  ModalClose,
} from './modifyMenu.styled';
import { DangerButton, BorderedButton } from '../ui';

export default function ModifyMenu(props) {
  const modifyToggle = useModalToggle();
  const deleteToggle = useModalToggle();

  const ModifyModal = () => <p>This is my modify modal</p>;
  const DeleteModal = () => (
    <>
      <p>Are you sure you want to delete this book?</p>
      <BorderedButton
        style={{ height: '40px', marginBottom: '5px' }}
        onClick={deleteToggle.toggleModal}
      >
        Cancel
      </BorderedButton>
      <DangerButton
        style={{ height: '40px', marginTop: '5px' }}
        onClick={handleDelete}
      >
        Delete
      </DangerButton>
    </>
  );

  const handleDelete = () => {
    props
      .handleDelete()
      .then(() => (window.location = '/'))
      .catch(e => console.error(e));
    deleteToggle.toggleModal();
  };

  return (
    <ModalProvider>
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
    </ModalProvider>
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
      <ModalContent>
        <ModalClose id="closeModal" onClick={props.toggleModal}>
          &times;
        </ModalClose>
        {props.modalContent()}
      </ModalContent>
    </Modal>
  </>
);
