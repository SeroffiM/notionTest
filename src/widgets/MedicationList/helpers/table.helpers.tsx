import { IMedication } from '@/entities/medication/types';
import { ITableColType } from '@/shared/ui/TableComponent';
import { Typography } from '@mui/material';
import { IncrementDecrementMedication } from '@/feature/medications/IncrementDecrementMedication';

export const columns: ITableColType<IMedication>[] = [
  {
    headerName: 'Name',
    renderCell: (row) => <Typography>{row.name}</Typography>,
  },
  {
    headerName: 'Description',
    renderCell: (row) => <Typography>{row.description}</Typography>,
  },
  {
    headerName: 'Intakes Count',
    renderCell: (row) => <Typography>{row.intakesCount}</Typography>,
  },
  {
    headerName: 'Destination Count',
    renderCell: (row) => <Typography>{row.destinationCount}</Typography>,
  },
  {
    headerName: 'Update Time',
    renderCell: (row) => <Typography>{new Date(row.updated).toLocaleString()}</Typography>,
  },
  {
    headerName: '',
    renderCell: (row) => <IncrementDecrementMedication row={row} />,
  },
];

export const getSortedMedications = (medications: IMedication[]) =>
  medications.sort((a, b) => {
    if (a.isFulfilled && !b.isFulfilled) {
      return 1;
    }

    if (b.isFulfilled && !a.isFulfilled) {
      return -1;
    }

    return new Date(b.updated).getTime() - new Date(a.updated).getTime();
  });
