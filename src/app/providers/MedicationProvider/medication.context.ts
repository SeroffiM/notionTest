import { Dispatch, createContext } from 'react';
import { IMedication } from '@/entities/medication/types';
import { TMedicationsActionsTypes } from './store/medications.actions';

type IMedicationContext = {
  medications: IMedication[];
  dispatch: Dispatch<TMedicationsActionsTypes>;
};

export const MedicationContext = createContext<IMedicationContext>({
  medications: [],
  dispatch: () => {},
});
