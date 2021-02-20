import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const activeClassName = 'active';

const Links = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;

  &:visited {
    color: greenyellow;
  }

  &.${activeClassName} {
    color: red;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <Nav data-testid="navbar">
      <div className="nav-link">
        <Links to="/top" activeClassName={activeClassName}>
          Top Stories
        </Links>
        <Links to="/new" activeClassName={activeClassName}>
          Latest Stories
        </Links>
      </div>
    </Nav>
  );
};

export default Navbar;