import { createGlobalStyle } from 'styled-components';

import background from '../img/background-min.png';

const theme = {
  colors: {
    default: {
      bg: '#EEEEEE',
      text: '#101010',
    },
    primary: {
      bg: '#4F2484',
      text: '#F4EBFF',
    },
    accent: {
      bg: '#24847F',
      text: '#EDFFFE',
    },
    danger: {
      bg: '#842429',
      text: '#dedede',
    },
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
  },
};

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600');

    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    font-family: 'Montserrat', sans-serif;
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.default.text};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a.selected,
  a:hover {
    color: ${({ theme }) => theme.colors.primary.bg}
  }
`;

export { GlobalStyle };
export default theme;
