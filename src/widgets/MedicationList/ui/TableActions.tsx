import { useContext } from 'react';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { IMedication } from '@/entities/medication/types';
import { Button, Box } from '@mui/material';
import { editMedication } from '@/app/providers/MedicationProvider/store/medications.actions';

export const TableActions = ({ row }: { row: IMedication }) => {
  const { dispatch } = useContext(MedicationContext);

  const handleIncrement = () => {
    dispatch(editMedication({ ...row, intakesCount: row.intakesCount + 1 }));
  };

  const handleDecrement = () => {
    dispatch(editMedication({ ...row, intakesCount: row.intakesCount - 1 }));
  };

  return (
    <Box display="flex">
      <Box visibility={row.intakesCount > 0 ? 'visible' : 'hidden'}>
        <Button onClick={handleDecrement} variant="contained">
          -
        </Button>
      </Box>
      <Box visibility={row.intakesCount < row.destinationCount ? 'visible' : 'hidden'} ml={2}>
        <Button onClick={handleIncrement} variant="contained">
          +
        </Button>
      </Box>
    </Box>
  );
};
