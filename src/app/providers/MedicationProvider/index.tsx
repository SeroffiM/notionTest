import { ReactNode, useEffect } from 'react';
import { useStore } from './store/useStore';
import { MedicationContext } from './medication.context';

export const MedicationProvider = ({ children }: { children: ReactNode }) => {
  const { medications, dispatch } = useStore();

  useEffect(() => {
    localStorage.setItem('medications', JSON.stringify(medications));
  }, [medications]);

  return (
    <MedicationContext.Provider value={{ medications: [...medications], dispatch }}>
      {children}
    </MedicationContext.Provider>
  );
};
