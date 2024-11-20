import { FC } from 'react';
import { ModalFooterStyled } from '../styled';

const ModalFooter: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ModalFooterStyled>{children}</ModalFooterStyled>
    </>
  );
};

export default ModalFooter;
