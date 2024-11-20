import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { IconRemove } from '@components/ui/Icons';
import InputCheckbox from '@components/ui/InputCheckbox';
import { TTodoItem } from '@src/types';
import { DELETE_TODO, UPDATE_TODO } from '@src/graphql/todo';
import { TodoItemStyled } from '../styled';

type TTodoItemProps = {
  listId: number;
  todo: TTodoItem;
};

const Todo: FC<TTodoItemProps> = ({ listId, todo }) => {
  const { title, checked, id } = todo;

  const [deleteTodo] = useMutation(DELETE_TODO, {
    onError: error => console.error('Error delete todo:', error),
  });

  const [updateTodo] = useMutation(UPDATE_TODO, {
    onError: error => console.error('Error update todo:', error),
  });

  return (
    <TodoItemStyled>
      <InputCheckbox
        title={title}
        checked={checked}
        onClick={() => updateTodo({ variables: { id, listId } })}
      />

      <IconRemove
        width={20}
        height={20}
        type="remove"
        onClick={() =>
          deleteTodo({
            variables: {
              id,
              listId,
            },
          })
        }
      />
    </TodoItemStyled>
  );
};

export default Todo;
