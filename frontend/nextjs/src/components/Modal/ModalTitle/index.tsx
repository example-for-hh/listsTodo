import { FC } from 'react';
import Title from '@components/ui/Title';

const ModalTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <Title title={title} type="h3" />
    </>
  );
};

export default ModalTitle;
