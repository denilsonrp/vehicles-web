import React from 'react';
import { FiEdit } from 'react-icons/fi';

import { ListItemContainer } from './styles';

const ListItem = ({ vehicle, index, setVehicleDetailed }) => (
  <ListItemContainer>
    <h3>
      {vehicle.vehicle}
      <span>{vehicle.brand}</span>
      <span>{vehicle.year}</span>
    </h3>

    <FiEdit size={22} onClick={() => setVehicleDetailed(index)} />
  </ListItemContainer>
);

export default ListItem;
