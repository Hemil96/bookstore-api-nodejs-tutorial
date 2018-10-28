import styled from 'styled-components';
import ReactModal from 'styled-react-modal';

import moreIcon from '../../img/more.svg';

export const Hamburger = styled.button`
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
    visibility: hidden;
    transition: color 0.3s ease;
  }

  &:focus > ul {
    visibility: visible;
    color: inherit;
  }
`;

export const Options = styled.ul`
  position: absolute;
  top: 0px;
  right: 24px;
  margin: 0;
  text-align: left;
  height: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.default.bg};
`;

// TODO change to button tag while keeping same look and feel
export const Toggle = styled.a``;

export const Option = styled.li`
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

export const Modal = styled(ReactModal)`
  width: 20vw;
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.default.bg};
`;
