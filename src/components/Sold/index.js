import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import { SoldContainer } from './styles';

const Sold = () => (
  <SoldContainer>
    <FaCheckCircle color="#3089c5" size={22} />
    Vendido
  </SoldContainer>
);

export default Sold;
