import styled from 'styled-components';

export const ModalBg = styled.div`
  background: rgba(0, 0, 0, .25);
  height: 100%;
  left: 0;
  position: absolute;
  transition: top .25s;
  width: 100%;

  ${(props) => (props.modalVisibility ? 'top: 0' : 'top: -100%;')};
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  left: 50%;
  max-width: 520px;
  padding: 20px;
  position: relative;
  top: 60px;
  transform: translateX(-50%);

  .title {
    border-bottom: 1px solid #e4e4e4;
    margin-bottom: 20px;
    padding-bottom: 10px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

export const PaginationButton = styled.button`
  align-items: center;
  background: #cccccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  height: 50px;
  margin-left: 5px;
  padding: 0 16px;

  &:hover {
    opacity: .9;
  }

  &[disabled] {
    background: #f2f2f2;
    cursor: default;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  cursor: pointer; 
  font-weight: bold;
  position: absolute;
  right: 20px; 
  top: 24px;
`;
