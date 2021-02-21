import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const activeClassName = 'active';

const Links = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  border: 1px solid rgba(173, 255, 47, 0.5);
  background-color: black;
  padding: 5px 10px;
  border-radius: 4px;

  &:visited {
    color: greenyellow;
  }

  &.${activeClassName} {
    color: black;
    font-weight: bold;
    background-color: #45FF2F;
  }

  &:hover {
    border-color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav data-testid="navbar">
      <div className="nav-link">
        <Links to="/topstories" activeClassName={activeClassName}>
          Top Stories
        </Links>
        <Links to="/newstories" activeClassName={activeClassName}>
          Latest Stories
        </Links>
        <Links to="/beststories" activeClassName={activeClassName}>
          Best Stories
        </Links>        
      </div>
    </Nav>
  );
};

export default Navbar;