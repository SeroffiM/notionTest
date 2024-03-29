import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    grey: {
      '100': '#e0e0e0',
    },
  },
  spacing: 4,
  components: {
    MuiTable: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.palette.grey[100]}`,
          borderRadius: theme.spacing(4),
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          ['&::not(:first-child)']: {
            textAlign: 'right',
          },
        },
      },
    },
  },
});
