import React from 'react';

import { CardsContainer } from './styles';

const Cards = ({ children }) => (
  <CardsContainer>
    {children}
  </CardsContainer>
);

export default Cards;
