import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  TableRow,
  Box,
  Typography,
} from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { ForwardedRef } from 'react';

// type ITableDataWithUuid<T extends { uuid: string }> = T;

const TableRowComponent = React.forwardRef((props, ref: ForwardedRef<HTMLTableRowElement>) => (
  <TableRow {...props} ref={ref} />
));

const TableCellComponent = React.forwardRef((props, ref: ForwardedRef<HTMLTableCellElement>) => (
  <TableCell {...props} ref={ref} />
));

const MotionTableRow = motion(TableRowComponent);
const MotionTableCell = motion(TableCellComponent);

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
  if (tableData.length === 0) {
    return (
      <Box py={4}>
        <Typography textAlign="center">No content</Typography>
      </Box>
    );
  }

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
              <MotionTableRow key={row.uuid} layout transition={{ type: 'spring' }}>
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
