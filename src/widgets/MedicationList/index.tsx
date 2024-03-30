import { Box } from '@mui/material';
import { TableComponent } from '@/shared/ui/TableComponent';
import { columns } from './helpers/table.helpers';
import { IMedication } from '@/entities/medication/types';
import { useContext } from 'react';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';

export const MedicationList = () => {
  const { medications } = useContext(MedicationContext);

  return (
    <Box>
      <TableComponent<IMedication> tableColumns={columns} tableData={medications} />
    </Box>
  );
};
