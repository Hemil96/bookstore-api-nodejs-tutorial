import React, { Component } from 'react';
import Modal from 'styled-react-modal';

// TODO style modal
const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.white};
`;

class ModalToggle extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        {this.props.renderToggle(this.toggleModal)}
        <StyledModal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}
        >
          {this.props.renderModal(this.toggleModal)}
        </StyledModal>
      </>
    );
  }
}

export default ModalToggle;
