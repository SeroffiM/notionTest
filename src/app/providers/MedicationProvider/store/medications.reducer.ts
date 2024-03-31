import { EMedicationsActionsTypes, TMedicationsActionsTypes } from './medications.actions';
import { v4 } from 'uuid';
import { MedicationsStore } from './useStore';
import { IMedication } from '@/entities/medication/types';

const getMedicationNewInfo = (v: IMedication) => {
  return {
    updated: new Date().toISOString(),
    isFulfilled: v.intakesCount === v.destinationCount,
  };
};

export const medicationsReducer = (
  state: MedicationsStore,
  action: TMedicationsActionsTypes,
): MedicationsStore => {
  switch (action.type) {
    case EMedicationsActionsTypes.ADD_MEDICATION: {
      const medication = action.payload;
      const newMedication = { ...medication, ...getMedicationNewInfo(medication), uuid: v4() };
      return [...state, newMedication];
    }

    case EMedicationsActionsTypes.EDIT_MEDICATION: {
      const medication = action.payload;
      const newMedication = { ...medication, ...getMedicationNewInfo(medication) };
      return state.map((item) => (item.uuid === medication.uuid ? newMedication : item));
    }

    case EMedicationsActionsTypes.DELETE_MEDICATION:
      return state.filter((item) => item.uuid !== action.payload);

    default:
      return state;
  }
};
