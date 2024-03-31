import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { MedicationProvider } from '@/app/providers/MedicationProvider';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { deleteMedication } from '@/app/providers/MedicationProvider/store/medications.actions';
import { withBasicProvider } from '@/shared/utils/withProviders.utils';
import { MedicationCard } from '@/widgets/medications/MedicationCard';
import { Box, Button } from '@mui/material';
import { MedicationDrawer } from '@/entities/medication/ui/MedicationDrawer';
import { MedicationNotes } from '@/widgets/medications/MedicationNotes';

const MedicationItem = () => {
  const navigate = useNavigate();
  const { uuid } = useParams<{ uuid: string }>();
  const { medications, dispatch } = useContext(MedicationContext);
  const [openIsModal, setIsOpenModal] = useState(false);
  const item = medications.find((v) => v.uuid === uuid);

  useEffect(() => {
    if (!item) {
      navigate('/');
    }
  }, [item]);

  const handleDelete = () => {
    dispatch(deleteMedication(item?.uuid || ''));
  };

  return (
    <>
      <Box>
        <Box display="flex">
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
          <Box ml={2}>
            <Button variant="contained" onClick={() => setIsOpenModal(true)}>
              Edit
            </Button>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center">
          {item && <MedicationCard medication={item} />}
        </Box>
        <Box mt={10} display="flex" justifyContent="center">
          {item && <MedicationNotes medication={item} />}
        </Box>
      </Box>
      <MedicationDrawer
        open={openIsModal}
        medication={item}
        onClose={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default withBasicProvider(MedicationProvider)(MedicationItem);
