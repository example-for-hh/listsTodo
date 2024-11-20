import { modals } from '@components/Modal/settings';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TModal } from '@src/types';

const initialState: TModal[] = [];

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalToggle: (
      state,
      action: PayloadAction<{ modalType: string; modalProps?: any }>
    ) => {
      const modal = state.find(
        modal => modal.modalType === action.payload.modalType
      );

      if (modal) {
        return state.filter(
          modal => modal.modalType !== action.payload.modalType
        );
      } else {
        const newModal = modals.find(
          modal => modal.modalType === action.payload.modalType
        );

        if (newModal) {
          state.push({
            ...newModal,
            modalProps: action.payload.modalProps ?? null,
            isOpenModal: true,
          });
        }
      }
    },
  },
});

export const { modalToggle } = modalSlice.actions;

export default modalSlice.reducer;
