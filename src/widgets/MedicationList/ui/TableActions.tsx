import { useContext } from 'react';
import { Box } from '@mui/material';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { IMedication } from '@/entities/medication/types';
import { editMedication } from '@/app/providers/MedicationProvider/store/medications.actions';
import { MotionButton } from '@/shared/ui/MotionButton';

export const TableActions = ({ row }: { row: IMedication }) => {
  const { dispatch } = useContext(MedicationContext);

  const handleIncrement = () => {
    dispatch(editMedication({ ...row, intakesCount: row.intakesCount + 1 }));
  };

  const handleDecrement = () => {
    dispatch(editMedication({ ...row, intakesCount: row.intakesCount - 1 }));
  };
  const isIncrementAvailable = row.intakesCount < row.destinationCount;
  const isDecrementAvailable = row.intakesCount > 0;

  return (
    <Box display="flex">
      <Box>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: isDecrementAvailable ? 1 : 0 }}
          sx={{
            pointerEvents: isDecrementAvailable ? 'all' : 'none',
          }}
          onClick={handleDecrement}
          variant="contained"
        >
          -
        </MotionButton>
      </Box>
      <Box ml={2}>
        <MotionButton
          initial={{ opacity: 0 }}
          animate={{ opacity: isIncrementAvailable ? 1 : 0 }}
          sx={{
            pointerEvents: isIncrementAvailable ? 'all' : 'none',
          }}
          onClick={handleIncrement}
          variant="contained"
        >
          +
        </MotionButton>
      </Box>
    </Box>
  );
};
