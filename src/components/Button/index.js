import React from 'react';

import { ButtonContainer } from './styles';

const Button = (props) => (
  <ButtonContainer {...props}>
    {props.children}
  </ButtonContainer>
);

export default Button;
