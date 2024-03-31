import { Card, CardContent, Typography } from '@mui/material';
import { IncrementDecrementMedication } from '@/feature/medications/IncrementDecrementMedication';
import { IMedication } from '@/entities/medication/types';

export const MedicationCard = ({ medication }: { medication: IMedication }) => {
  return (
    <Card
      sx={{
        width: (theme) => theme.spacing(100),
      }}
    >
      <CardContent>
        <Typography variant="h1" gutterBottom>
          {medication.name}
        </Typography>
        <Typography gutterBottom>{medication.description}</Typography>
        <Typography>
          {medication.intakesCount} / {medication.destinationCount}
        </Typography>
        <IncrementDecrementMedication medication={medication} />
      </CardContent>
    </Card>
  );
};
