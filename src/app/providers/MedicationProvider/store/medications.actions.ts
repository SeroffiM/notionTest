import { IMedication } from '@/entities/medication/types';
export enum EMedicationsActionsTypes {
  ADD_MEDICATION = 'ADD_MEDICATION',
  EDIT_MEDICATION = 'EDIT_MEDICATION',
  DELETE_MEDICATION = 'DELETE_MEDICATION',
}

export const addMedication = (medication: IMedication) => ({
  type: EMedicationsActionsTypes.ADD_MEDICATION as EMedicationsActionsTypes.ADD_MEDICATION,
  payload: medication,
});

export const editMedication = (medication: IMedication) => ({
  type: EMedicationsActionsTypes.EDIT_MEDICATION as EMedicationsActionsTypes.EDIT_MEDICATION,
  payload: medication,
});

export const deleteMedication = (uuid: string) => ({
  type: EMedicationsActionsTypes.DELETE_MEDICATION as EMedicationsActionsTypes.DELETE_MEDICATION,
  payload: uuid,
});

export type TMedicationsActionsTypes =
  | ReturnType<typeof addMedication>
  | ReturnType<typeof editMedication>
  | ReturnType<typeof deleteMedication>;
