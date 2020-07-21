import styled from 'styled-components';

export const InputContainer = styled.input`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  color: #383838;
  flex: 1;
  padding: 12px;

  &::placeholder {
    color: #a8a8b3;
  }

  ~ button {
    margin-left: 16px;
  }
`;
