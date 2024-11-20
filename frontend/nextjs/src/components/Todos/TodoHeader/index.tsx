import { FC } from 'react';
import { IconRemove } from '@components/ui/Icons';
import { modalToggle } from '@store/modal/slice';
import { MODAL_ADD_LIST } from '@vars/modal';
import { useAppDispatch } from '@src/hooks/redux';

import { TodoHeaderStyled } from '../styled';

const TodoHeader: FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <TodoHeaderStyled>
        {children && children}
        <IconRemove
          width={20}
          height={20}
          type="add"
          onClick={() => dispatch(modalToggle({ modalType: MODAL_ADD_LIST }))}
        />
      </TodoHeaderStyled>
    </>
  );
};

export default TodoHeader;
