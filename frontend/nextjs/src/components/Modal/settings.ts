import { MODAL_ADD_LIST, MODAL_ADD_TODOS } from '@src/vars';
import ModalAddList from './ModalAddList';

import ModalAddTodos from './ModalAddTodos';

import { TModal } from '@src/types';

type TModalCompnonets = {
  [key: string]: React.ComponentType<{ props?: any }>;
};

export const modalComponents: TModalCompnonets = {
  [MODAL_ADD_LIST]: ModalAddList,
  [MODAL_ADD_TODOS]: ModalAddTodos,
};

export const modals: TModal[] = [
  {
    modalTitle: 'Добавить новый лист',
    modalType: MODAL_ADD_LIST,
    isOpenModal: false,
  },
  {
    modalTitle: 'Добавить новую задачу',
    modalType: MODAL_ADD_TODOS,
    isOpenModal: false,
  },
];
