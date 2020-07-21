import styled from 'styled-components';

export const TextAreaContainer = styled.textarea`
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  color: #383838;
  flex: 1;
  margin-bottom: 16px;
  padding: 12px;
  resize: none;

  &::placeholder {
    color: #a8a8b3;
  }
`;
