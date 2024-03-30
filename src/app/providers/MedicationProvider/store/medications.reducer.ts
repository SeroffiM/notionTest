import { IMedication } from '@/entities/medication/types';
import { EMedicationsActionsTypes, TMedicationsActionsTypes } from './medications.actions';
import { v4 } from 'uuid';

export const medicationsReducer = (
  state: IMedication[],
  action: TMedicationsActionsTypes,
): IMedication[] => {
  switch (action.type) {
    case EMedicationsActionsTypes.ADD_MEDICATION:
      return [{ ...action.payload, uuid: v4(), updated: new Date().toISOString() }, ...state];

    case EMedicationsActionsTypes.EDIT_MEDICATION: {
      const medication = action.payload;

      return state.reduce((acc: IMedication[], item) => {
        if (item.uuid !== medication.uuid) {
          acc.push(item);
        } else {
          acc.unshift({ ...medication, updated: new Date().toISOString() });
        }
        return acc;
      }, []);
    }

    case EMedicationsActionsTypes.DELETE_MEDICATION:
      return state.filter((item) => item.uuid !== action.payload);

    default:
      return state;
  }
};
