export type TListTodo = {
  id: number;
  title: string;
  todos: TTodoItem[];
};

export type TListTodoClient = TListTodo & {
  isOpened: boolean;
  selectedFilter: string;
};

export type TTodoItem = {
  id: number;
  title: string;
  checked: boolean;
};

export type TPayloadItem = {
  listId: number;
  itemId: number;
};

export type TFilter = {
  [key: string]: string;
};
