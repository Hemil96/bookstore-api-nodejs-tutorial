import styled from 'styled-components';

export const PrimaryButton = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 1.1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #888;
  background-color: ${({ theme }) => theme.colors.primary.bg};
  color: ${({ theme }) => theme.colors.primary.text};

  &:hover {
    box-shadow: 0px 1px 2px 1px #888;
  }

  &:active {
    box-shadow: none;
  }
`;
