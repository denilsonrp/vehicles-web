import React from 'react';

import { HeaderContainer } from './styles';

import logo from '../../assets/logo.svg';

const Header = () => (
  <HeaderContainer>
    <img src={logo} width="200" alt="Logo" />
  </HeaderContainer>
);

export default Header;
