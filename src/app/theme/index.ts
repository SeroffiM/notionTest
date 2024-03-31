import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    grey: {
      '100': '#e0e0e0',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
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
        root: ({ theme }) => ({
          ['&::not(:first-child)']: {
            textAlign: 'right',
          },
          [theme.breakpoints.down('md')]: {
            padding: theme.spacing(2.5),
          },
        }),
      },
    },
  },
});
