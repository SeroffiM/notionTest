import React, { ForwardedRef } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
  TableRowProps,
  TableCellProps,
  SxProps,
  Theme,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

const TableRowComponent = React.forwardRef(
  (props: TableRowProps, ref: ForwardedRef<HTMLTableRowElement>) => (
    <TableRow {...props} ref={ref} />
  ),
);

const TableCellComponent = React.forwardRef(
  (props: TableCellProps, ref: ForwardedRef<HTMLTableCellElement>) => (
    <TableCell {...props} ref={ref} />
  ),
);

const MotionTableRow = motion(TableRowComponent);
const MotionTableCell = motion(TableCellComponent);

export interface ITableComponent<T> {
  tableColumns: ITableColType<T>[];
  tableData: T[];
  getRowSx?: (row: T) => SxProps<Theme>;
  onSelectRow?: (row: T) => void;
}

export interface ITableColType<T> {
  headerName: string;
  renderCell: (row: T, rowIndex: number) => React.ReactNode;
}

export const TableComponent = <T extends { uuid: string }>({
  tableColumns,
  tableData,
  getRowSx,
  onSelectRow,
}: ITableComponent<T>) => {
  if (tableData.length === 0) {
    return (
      <Box py={4}>
        <Typography textAlign="center">No content</Typography>
      </Box>
    );
  }

  const handleOnSelectRow = (row: T) => {
    if (onSelectRow) {
      onSelectRow(row);
    }
  };

  return (
    <TableContainer
      sx={{
        overflow: 'initial',
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map((item, i) => (
              <TableCell key={i}>{item.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <AnimatePresence>
            {tableData?.map((row) => (
              <MotionTableRow
                onClick={() => handleOnSelectRow(row)}
                key={row.uuid}
                sx={{
                  ...(onSelectRow && {
                    cursor: 'pointer',
                  }),
                  ...(getRowSx && getRowSx(row)),
                }}
                layout
                transition={{ type: 'spring' }}
              >
                {tableColumns.map((item, i) => (
                  <MotionTableCell transition={{ type: 'spring' }} key={`${row.uuid}-${i}`}>
                    {item.renderCell(row, i)}
                  </MotionTableCell>
                ))}
              </MotionTableRow>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
