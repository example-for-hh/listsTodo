import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/store';

export const selectModals = (state: RootState) => state.modal;

export const selectModalByType = (modalType: string) =>
  createSelector([selectModals], modals =>
    modals.find(modal => modal.modalType === modalType)
  );

export const selectIsOpenModals = (isSelected: boolean) =>
  createSelector([selectModals], modals =>
    modals.filter(modal => modal.isOpenModal === isSelected)
  );
