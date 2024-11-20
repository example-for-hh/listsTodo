import { configureStore } from '@reduxjs/toolkit';
import modalReducer, { modalToggle } from '@store/modal/slice';
import { TModal } from '@src/types';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

const initialState: TModal[] = [];

describe('modalSlice', () => {
  beforeEach(() => {
    store.dispatch(modalToggle({ modalType: 'existingModal' }));
  });

  test('should return the initial state', () => {
    expect(store.getState().modal).toEqual(initialState);
  });

  test('should toggle modal open', () => {
    const modalType = 'exampleModal';
    const modalProps = { exampleProp: 'exampleValue' };

    store.dispatch(modalToggle({ modalType, modalProps }));
  });

  test('should toggle modal closed', () => {
    const modalType = 'exampleModal';

    store.dispatch(modalToggle({ modalType }));

    expect(store.getState().modal).toEqual([]);
  });
});
