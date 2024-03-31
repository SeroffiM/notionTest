import { RouterProvider } from 'react-router';
import { router } from './app/router';
import '@/app/styles/styles.scss';
import { ThemeProvider } from '@mui/material';
import { theme } from './app/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
