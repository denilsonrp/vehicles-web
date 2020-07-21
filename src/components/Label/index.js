import React from 'react';

import { LabelContainer } from './styles';

const Label = (props) => (
  <LabelContainer {...props}>{props.children}</LabelContainer>
);

export default Label;
