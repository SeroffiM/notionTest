import { Box } from '@mui/material';
import { TableComponent } from '@/shared/ui/TableComponent';
import { columns, getSortedMedications } from './helpers/table.helpers';
import { IMedication } from '@/entities/medication/types';
import { useContext, useMemo } from 'react';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import { generatePath, useNavigate } from 'react-router';
import { ROUTES } from '@/shared/constants/routes.constants';

export const MedicationList = () => {
  const navigate = useNavigate();
  const { medications } = useContext(MedicationContext);

  const handleOnSelectRow = (row: IMedication) => {
    navigate(generatePath(ROUTES.MEDICATION, { uuid: row.uuid }));
  };

  const sortedMedications = useMemo(() => getSortedMedications(medications), [medications]);

  return (
    <Box>
      <TableComponent<IMedication>
        onSelectRow={handleOnSelectRow}
        getRowSx={(row) =>
          row.isFulfilled ? { backgroundColor: (theme) => theme.palette.grey[200] } : {}
        }
        tableColumns={columns}
        tableData={sortedMedications}
      />
    </Box>
  );
};
