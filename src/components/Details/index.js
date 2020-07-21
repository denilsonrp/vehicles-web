import React from 'react';

import { DetailsContainer } from './styles';

const Details = ({ vehicles, vehicleDetailed }) => (
  <DetailsContainer>
    <h2 className="title">Detalhes do veículo</h2>

    <h3 className="vehicle">
      { vehicles[vehicleDetailed]?.vehicle }
    </h3>

    <h3 className="subtitle">Marca</h3>
    <p>{ vehicles[vehicleDetailed]?.brand }</p>

    <h3 className="subtitle">Ano</h3>
    <p>{ vehicles[vehicleDetailed]?.year }</p>

    <h3 className="subtitle">Descrição</h3>
    <p>
      { vehicles[vehicleDetailed]?.description }
    </p>
  </DetailsContainer>
);

export default Details;
