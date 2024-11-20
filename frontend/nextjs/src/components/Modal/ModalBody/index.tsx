import { FC } from 'react';
import { ModalBodyStyled } from '../styled';

const ModalBody: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ModalBodyStyled>{children}</ModalBodyStyled>
    </>
  );
};

export default ModalBody;
