import { IMedication } from '@/entities/medication/types';
import { Reducer, useReducer } from 'react';
import { TMedicationsActionsTypes } from './medications.actions';
import { medicationsReducer } from './medications.reducer';

const medications = localStorage.getItem('medications');

export const useStore = () => {
  const [medicationsStore, dispatch] = useReducer<Reducer<IMedication[], TMedicationsActionsTypes>>(
    medicationsReducer,
    medications ? JSON.parse(medications) : [],
  );

  return { medications: medicationsStore, dispatch };
};
