import { FC } from 'react';
import { ModalHeaderStyled } from '../styled';

const ModalHeader: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ModalHeaderStyled>{children}</ModalHeaderStyled>
    </>
  );
};

export default ModalHeader;
