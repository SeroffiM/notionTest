import { useState } from 'react';
import { Box } from '@mui/material';
import { Button } from '@mui/material';
import { MedicationDrawer } from '@/entities/medication/ui/MedicationDrawer';
import { MedicationProvider } from '@/app/providers/MedicationProvider';
import { MedicationList } from '@/widgets/medications/MedicationList';

const Medications = () => {
  const [isAddMedicationOpen, setIsAddMedicationOpen] = useState(false);

  return (
    <MedicationProvider>
      <Box>
        <Box mb={2.5}>
          <Button onClick={() => setIsAddMedicationOpen(true)} variant="contained">
            Add
          </Button>
        </Box>
        <MedicationList />
      </Box>
      <MedicationDrawer open={isAddMedicationOpen} onClose={() => setIsAddMedicationOpen(false)} />
    </MedicationProvider>
  );
};

export default Medications;
