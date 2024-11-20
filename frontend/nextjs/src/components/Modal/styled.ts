import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 40px 0;
  background: hsla(0deg, 0%, 0%, 0.7);
`;
export const ModalContent = styled.div`
  position: relative;
  align-self: flex-start;
  width: 560px;
  padding: 16px;
  background: #fff;
  color: #000;
`;

export const ModalViewStyled = styled.div`
  position: relative;
`;

export const ModalHeaderStyled = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #000;
`;

export const ModalFooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding-top: 45px;
  border-top: 1px solid #fff;
  button {
    &:only-child {
      margin: 0;
    }

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:not(:first-child):not(:last-child) {
      margin: 0 5px;
    }
  }
`;

export const ModalBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const ModalBtnAdd = styled.div`
  position: absolute;
  bottom: 0;
`;
