import React from 'react';
import styled from 'styled-components';

import { ModalToggle } from '../ui';
import moreIcon from '../../img/more.svg';

const Hamburger = styled.button`
  background-image: url(${moreIcon});
  background-repeat: no-repeat;
  height: 24px;
  width: 24px;
  position: relative;
  left: 100%;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: inherit;

  &:hover,
  &:focus {
    background-color: lightgray;
  }

  & > ul {
    color: ${({ theme }) => theme.colors.default.bg};
    visibility: hidden;
    transition: color 0.3s ease;
  }

  &:focus > ul {
    visibility: visible;
    color: inherit;
  }
`;

const Options = styled.ul`
  position: absolute;
  top: 0px;
  right: 24px;
  margin: 0;
  text-align: left;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

// TODO change to button tag while keeping same look and feel
const Toggle = styled.a``;

const Option = styled.li`
  list-style: none;
  padding-right: 16px;
  font-size: 16px;
  display: inline;

  ${Toggle} {
    border-top: 0;
    transition: border-top 0.1s ease;
  }

  ${Toggle}.modify:hover {
    color: ${({ theme }) => theme.colors.accent.bg};
    border-top: 10px solid ${({ theme }) => theme.colors.accent.bg};
  }

  ${Toggle}.delete:hover {
    color: ${({ theme }) => theme.colors.danger.bg};
    border-top: 10px solid ${({ theme }) => theme.colors.danger.bg};
  }
`;

const createToggle = (toggleModal, className, text) => (
  <Toggle onClick={toggleModal} className={className}>
    {text}
  </Toggle>
);

// TODO make sure you focus something when modal pops up
// Modify Book modal
const renderModifyModal = toggleModal => (
  <div style={{ backgroundColor: 'white' }}>
    <p>This is my modify modal</p>
    <button onClick={toggleModal}>Close</button>
  </div>
);

// Delete Book modal
const renderDeleteModal = toggleModal => (
  <div style={{ backgroundColor: 'white' }}>
    <p>This is my delete modal</p>
    <button onClick={toggleModal}>Close</button>
  </div>
);

const ModifyMenu = () => {
  return (
    <Hamburger>
      <Options>
        <Option>
          <ModalToggle
            renderToggle={toggler => createToggle(toggler, 'modify', 'Modify')}
            renderModal={renderModifyModal}
          />
        </Option>
        <Option>
          <ModalToggle
            renderToggle={toggler => createToggle(toggler, 'delete', 'Delete')}
            renderModal={renderDeleteModal}
          />
        </Option>
      </Options>
    </Hamburger>
  );
};

export default ModifyMenu;
