import { Box } from '@mui/material';
import { TableComponent } from '@/shared/ui/TableComponent';
import { columns } from './helpers/table.helpers';
import { IMedication } from '@/entities/medication/types';
import { v4 } from 'uuid';

const rows: IMedication[] = Array.from(new Array(100)).map(() => ({
  name: '1',
  description: '23ewe',
  destinationCount: 23,
  initialCount: 5,
  uuid: v4(),
  updated: '23-23-2001',
}));

export const MedicationList = () => {
  return (
    <Box>
      <TableComponent<IMedication> tableColumns={columns} tableData={rows} />
    </Box>
  );
};
