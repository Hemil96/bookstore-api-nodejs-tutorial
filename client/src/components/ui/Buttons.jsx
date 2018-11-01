import styled from 'styled-components';

const Button = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  letter-spacing: 1.1px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #888;
  transition: background-color 0.15s ease, color 0.15s ease;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary.bg};
  color: ${({ theme }) => theme.colors.primary.text};
`;

export const DangerButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.danger.bg};
  color: ${({ theme }) => theme.colors.danger.text};
`;

export const BorderedButton = styled(Button)`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.accent.bg};
  color: ${({ theme }) => theme.colors.accent.bg};

  &:hover {
    background: ${({ theme }) => theme.colors.accent.bg};
    color: ${({ theme }) => theme.colors.accent.text};
  }
`;

export const LinkButton = styled(Button)`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.accent.bg};
  width: auto;
  padding-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;
