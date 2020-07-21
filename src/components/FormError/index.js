import React from 'react';

import { ErrorMsg } from './styles';

const FormError = () => (
  <ErrorMsg>
    Ocorreu um erro no envio do formulário, revise os valores digitados e tente novamente.
  </ErrorMsg>
);

export default FormError;
