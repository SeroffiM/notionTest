import { ReactNode } from 'react';
import { Box, Drawer, DrawerProps } from '@mui/material';

interface IDrawerComponentProps extends DrawerProps {
  header: ReactNode;
}

export const DrawerComponent = ({ header, children, ...drawerProps }: IDrawerComponentProps) => {
  return (
    <Drawer {...drawerProps}>
      <Box>{header}</Box>
      <Box>{children}</Box>
    </Drawer>
  );
};
