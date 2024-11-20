import { FC } from 'react';
import { Todo } from './styled';

const Todos: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Todo>{children && children}</Todo>;
};

export default Todos;
