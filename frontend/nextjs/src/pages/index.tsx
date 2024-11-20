import { FC } from 'react';
import useTodoListSubscriptions from '@hooks/useTodoListSubscriptions';
import Todos from '@components/Todos';
import Content from '@components/Layouts/Content';
import TodoHeader from '@components/Todos/TodoHeader';
import Title from '@components/ui/Title';
import TodoBody from '@components/Todos/TodoBody';

const Home: FC = () => {
  useTodoListSubscriptions();

  return (
    <>
      <Content>
        <Todos>
          <TodoHeader>
            <Title title="Todos" type="h1" />
          </TodoHeader>
          <TodoBody />
        </Todos>
      </Content>
    </>
  );
};

export default Home;
