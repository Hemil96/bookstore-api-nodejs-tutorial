import React from 'react';
import styled from 'styled-components';

import moreIcon from '../../img/more.svg';

const MoreIcon = styled.button`
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
  text-align: left;
  top: 4px;
  right: 24px;
  margin: 0;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

const Option = styled.li`
  list-style: none;
  padding-right: 16px;
  font-size: 16px;
  display: inline;

  a {
    transition: border-top 0.1s ease;
  }

  a.edit:hover {
    color: ${({ theme }) => theme.colors.accent.bg};
    border-top: 14px solid ${({ theme }) => theme.colors.accent.bg};
  }

  a.delete:hover {
    color: #842429;
    border-top: 14px solid #842429;
  }
`;

// TODO make links do things
const MoreOptions = () => {
  return (
    <MoreIcon>
      <Options>
        <Option>
          <a href="#" className="edit">
            Modify
          </a>
        </Option>
        <Option>
          <a href="#" className="delete">
            Delete
          </a>
        </Option>
      </Options>
    </MoreIcon>
  );
};

export default MoreOptions;
