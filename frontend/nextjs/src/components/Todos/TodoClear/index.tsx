import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { CLEAR_COMPLETED } from '@src/graphql/todo';

import { TodoClearStyled } from '../styled';

type TTodoClearProps = {
  listId: number;
  text?: string;
};

const TodoClear: FC<TTodoClearProps> = ({
  listId,
  text = 'Clear completed',
}) => {
  const [clearCompleted] = useMutation(CLEAR_COMPLETED, {
    variables: { id: listId },
    onError: error => console.error('Error clear completed:', error),
  });

  return (
    <TodoClearStyled onClick={() => clearCompleted()}>{text}</TodoClearStyled>
  );
};

export default TodoClear;
