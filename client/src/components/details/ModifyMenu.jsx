import React, { useState } from 'react';
import Modal, { ModalProvider } from 'styled-react-modal';

import {
  Hamburger,
  Options,
  Option,
  Toggle,
  ModalContent,
} from './modifyMenu.styled';
import { DangerButton, BorderedButton, BookForm, LinkButton } from '../ui';

export default function ModifyMenu(props) {
  const modifyToggle = useModalToggle();
  const deleteToggle = useModalToggle();

  const handleSubmit = modifiedBook => {
    return props.handleUpdate(modifiedBook._id, modifiedBook);
  };

  const ModifyModal = () => {
    return (
      <>
        <BookForm
          handleSubmit={handleSubmit}
          header="Update book"
          message="Change book details"
          submitBtnText="Save changes"
          values={props.selectedBook}
        />
        <LinkButton onClick={modifyToggle.toggleModal}>Close</LinkButton>
      </>
    );
  };

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
      .handleDelete(props.selectedBook._id)
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
    >
      <ModalContent>{props.modalContent()}</ModalContent>
    </Modal>
  </>
);
