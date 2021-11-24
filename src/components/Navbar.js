import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import { Header, Logo, List } from '../style/Componentstyle';

const Navbar = () => (
  <Header>
    <Logo src={logo} alt="logo" />
    <List>
      <li>
        <NavLink to="/" activeclassname="active">
          Home
        </NavLink>
      </li>
    </List>
  </Header>
);

export default Navbar;
