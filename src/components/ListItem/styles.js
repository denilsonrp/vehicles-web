import styled from 'styled-components';

export const ListItemContainer = styled.li`
  align-items: center;
  border: 1px solid #f2f2f2;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  :nth-child(2n) {
    background-color: #f2f2f2;
  }

  h3 {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      font-weight: normal;
      margin-top: 5px;
    }   
  }

  svg {
    cursor: pointer;
  }
`;
