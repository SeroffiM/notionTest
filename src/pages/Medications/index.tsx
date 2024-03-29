import { Box } from '@mui/material';
import { MedicationList } from '@/widgets/MedicationList';
import { Button } from '@mui/material';
import { MedicationDrawer } from '@/entities/medication/ui/MedicationDrawer';
import { useState } from 'react';

const Medications = () => {
  const [isAddMedicationOpen, setIsAddMedicationOpen] = useState(false);

  return (
    <>
      <Box>
        <Button onClick={() => setIsAddMedicationOpen(true)} variant="contained">
          Add
        </Button>
        <MedicationList />
      </Box>
      <MedicationDrawer open={isAddMedicationOpen} onClose={() => setIsAddMedicationOpen(false)} />
    </>
  );
};

export default Medications;
