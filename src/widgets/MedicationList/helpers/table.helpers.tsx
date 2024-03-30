import { IMedication } from '@/entities/medication/types';
import { ITableColType } from '@/shared/ui/TableComponent';
import { Typography } from '@mui/material';
import { TableActions } from '../ui/TableActions';

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
    renderCell: (row) => <TableActions row={row} />,
  },
];
