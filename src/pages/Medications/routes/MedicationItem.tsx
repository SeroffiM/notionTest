import { MedicationProvider } from '@/app/providers/MedicationProvider';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { IncrementDecrementMedication } from '@/feature/medications/IncrementDecrementMedication';
import { withBasicProvider } from '@/shared/utils/withProviders.utils';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useContext } from 'react';
import { useParams } from 'react-router';

const MedicationItem = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const { medications } = useContext(MedicationContext);
  const item = medications.find((v) => v.uuid === uuid);
  console.log(medications);
  if (!item) {
    return (
      <Box>
        <Typography>No item</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box></Box>
      <Box display="flex" justifyContent="center">
        <Card
          sx={{
            width: (theme) => theme.spacing(100),
          }}
        >
          <CardContent>
            <Typography variant="h1" gutterBottom>
              {item.name}
            </Typography>
            <Typography gutterBottom>{item.description}</Typography>
            <Typography>
              {item.intakesCount} / {item.destinationCount}
            </Typography>
            <IncrementDecrementMedication row={item} />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default withBasicProvider(MedicationProvider)(MedicationItem);
