import { IMedication } from '@/entities/medication/types';
import { Reducer, useReducer } from 'react';
import { TMedicationsActionsTypes } from './medications.actions';
import { medicationsReducer } from './medications.reducer';

export type MedicationsStore = IMedication[];

export const useStore = () => {
  const medications = localStorage.getItem('medications');

  const [medicationsStore, dispatch] = useReducer<
    Reducer<MedicationsStore, TMedicationsActionsTypes>
  >(medicationsReducer, medications ? JSON.parse(medications) : []);

  return { medications: medicationsStore, dispatch };
};
