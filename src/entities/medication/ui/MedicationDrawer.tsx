import { DrawerComponent } from '@/shared/ui/Drawer';
import { Box, DrawerProps } from '@mui/material';

export const MedicationDrawer = (props: DrawerProps) => {
  return (
    <DrawerComponent {...props} header="add">
      <Box>add</Box>
    </DrawerComponent>
  );
};
