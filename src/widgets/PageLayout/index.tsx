import { Outlet } from 'react-router';
import { Box, styled } from '@mui/material';
import { Footer } from '@/shared/ui/Footer';
import { Header } from '@/shared/ui/Header';

const StyledBox = styled(Box)(() => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

const Main = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  flex: 1,
}));

export const PageLayout = () => {
  return (
    <StyledBox>
      <Header />
      <Main component="main">
        <Outlet />
      </Main>
      <Footer />
    </StyledBox>
  );
};
