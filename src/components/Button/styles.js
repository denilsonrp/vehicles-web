import styled from 'styled-components';

export const ButtonContainer = styled.button`
  align-self: flex-end;
  align-items: center;
  background: #364382;
  border: 1px solid #364382;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  justify-content: center;
  max-width: 180px;
  padding: 12px 16px;
  transition: opacity .5s;

  &:hover {
    opacity: .9;
  }

  svg {
    margin-right: 5px;
  }
`;
