import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { MockedProvider } from '@apollo/client/testing';

import Home from '@src/pages';

const store = configureStore({
  reducer: {
    todos: () => [],
    modal: () => [],
  },
});

jest.mock('@components/Todos', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="todos">{children}</div>,
}));

jest.mock('@components/Layouts/Content', () => ({
  __esModule: true,
  default: ({ children }: any) => <div data-testid="content">{children}</div>,
}));

jest.mock('@components/Todos/TodoHeader', () => ({
  __esModule: true,
  default: ({ children }: any) => (
    <div data-testid="todo-header">{children}</div>
  ),
}));

jest.mock('@components/ui/Title', () => ({
  __esModule: true,
  default: ({ title, type }: any) => <div data-testid="title">{title}</div>,
}));

jest.mock('@components/Todos/TodoBody', () => ({
  __esModule: true,
  default: () => <div data-testid="todo-body">TodoBody</div>,
}));

describe('Компонент Home', () => {
  test('render component Home', () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );

    expect(screen.getByTestId('content')).toBeInTheDocument();
    expect(screen.getByTestId('todos')).toBeInTheDocument();
    expect(screen.getByTestId('todo-header')).toBeInTheDocument();
    expect(screen.getByTestId('title')).toHaveTextContent('Todos');
    expect(screen.getByTestId('todo-body')).toBeInTheDocument();
  });
});
