import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

import searchIcon from '../../img/search.svg';

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

const Brand = styled.h1`
  display: inline;
  font-weight: 400;
  margin: 0;
  font-size: 24px;
  text-shadow: 0px 1px 1px #000000;
`;

const NavLink = styled(RouterNavLink)`
  font-size: 18px;
  padding-right: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.light};

  &.active {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
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

// TODO search functionality
class Navbar extends React.Component {
  state = {
    search: '',
  };

  onChange = e => this.setState({ search: e.target.value });

  render() {
    return (
      <StyledNavbar>
        <Brand>Darnes and Global</Brand>
        <div>
          <NavLink
            to={'/'}
            activeClassName={'active'}
            isActive={(_, location) =>
              // Add active styling for home page and details pages
              location.pathname.includes('/details') ||
              location.pathname === '/'
            }
          >
            Buy
          </NavLink>
          <NavLink to={'/sell'} activeClassName={'active'}>
            Sell
          </NavLink>
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
