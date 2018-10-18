import React from 'react';
import styled from 'styled-components';

import searchIcon from '../img/search.svg';

const StyledNavbar = styled.nav`
  color: #f2f2f2;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  margin: 20px 0;
  display: flex;
  justify-content: space-between;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

const Brand = styled.a`
  font-size: 24px;
  text-shadow: 0px 1px 1px #000000;
`;

const NavLink = styled.a`
  font-size: 18px;
  padding-right: 35px;
`;

const SearchBar = styled.input`
  position: relative;
  top: -1px;
  background-color: ${({ theme }) => theme.colors.default.bg};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 3px;
  border-radius: 4px;
  border: none;
  padding: 8px;
  text-indent: 20px;
  font-size: 0.95em;
  color: ${({ theme }) => theme.colors.default.text};
`;

class Navbar extends React.Component {
  state = {
    search: '',
  };

  onChange = e => this.setState({ search: e.target.value });

  render() {
    return (
      <StyledNavbar>
        <Brand href="#">Darnes and Global</Brand>
        <div>
          <NavLink href="#">Buy</NavLink>
          <NavLink href="#">Sell</NavLink>
          <SearchBar
            size="18"
            type="search"
            name="search"
            aria-label="Search books"
            placeholder="Search..."
            onChange={this.onChange}
          />
        </div>
      </StyledNavbar>
    );
  }
}

export default Navbar;
