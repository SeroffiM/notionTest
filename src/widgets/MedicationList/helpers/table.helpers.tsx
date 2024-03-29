import { IMedication } from '@/entities/medication/types';
import { ITableColType } from '@/shared/ui/TableComponent';
import { Typography } from '@mui/material';

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
    headerName: 'Initial Count',
    renderCell: (row) => <Typography>{row.initialCount}</Typography>,
  },
  {
    headerName: 'Destination Count',
    renderCell: (row) => <Typography>{row.destinationCount}</Typography>,
  },
  {
    headerName: 'Update Time',
    renderCell: (row) => <Typography>{row.updated}</Typography>,
  },
];
