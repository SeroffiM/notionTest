import { useContext } from 'react';
import { Box } from '@mui/material';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { IMedication } from '@/entities/medication/types';
import { editMedication } from '@/app/providers/MedicationProvider/store/medications.actions';
import { MotionButton } from '@/shared/ui/MotionButton';

export const IncrementDecrementMedication = ({ medication }: { medication: IMedication }) => {
  const { dispatch } = useContext(MedicationContext);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(editMedication({ ...medication, intakesCount: medication.intakesCount + 1 }));
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(editMedication({ ...medication, intakesCount: medication.intakesCount - 1 }));
  };
  const intakedCounts = medication.intakesCount;
  const isIncrementAvailable = intakedCounts < medication.destinationCount;
  const isDecrementAvailable = intakedCounts > 0;

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
