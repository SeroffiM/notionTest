import { Table, TableBody, TableHead, TableCell, TableContainer, TableRow } from '@mui/material';

// type ITableDataWithUuid<T extends { uuid: string }> = T;

export interface ITableComponent<T> {
  tableColumns: ITableColType<T>[];
  tableData: T[];
  selectedRowId?: string;
  onSelectRow?: (row: T) => void;
}

export interface ITableColType<T> {
  headerName: string;
  renderCell: (row: T, rowIndex: number) => React.ReactNode;
}

export const TableComponent = <T extends { uuid: string }>({
  tableColumns,
  tableData,
}: ITableComponent<T>) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map(({ headerName }, i) => (
              <TableCell key={i}>{headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData?.map((row) => (
            <TableRow key={row.uuid}>
              {tableColumns.map(({ renderCell }, i) => (
                <TableCell key={`${row.uuid}-${i}`}>{renderCell(row, i)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
