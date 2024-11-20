import { FC, useRef } from 'react';
import Button from '@components/ui/Button';
import { IconClose } from '@components/ui/Icons';
import { ModalContent, ModalStyled } from './styled';

type TModalProps = {
  children: React.ReactNode;
  onCloseModal?: () => void;
};

const Modal: FC<TModalProps> = ({ children, onCloseModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ModalStyled>
        <ModalContent ref={modalRef}>
          <Button modal={true} onClick={onCloseModal}>
            <IconClose />
          </Button>
          {children}
        </ModalContent>
      </ModalStyled>
    </>
  );
};

export default Modal;
