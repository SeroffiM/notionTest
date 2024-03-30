import { Box, Button, Drawer, DrawerProps, Grid, Typography } from '@mui/material';

interface IDrawerComponentProps extends DrawerProps {
  header: string;
  onSave: () => void;
}

export const DrawerComponent = ({
  header,
  children,
  onClose,
  onSave,
  ...drawerProps
}: IDrawerComponentProps) => {
  const handleOnClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onClose) {
      onClose(e, 'backdropClick');
    }
  };

  return (
    <Drawer
      onClose={onClose}
      {...drawerProps}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 'auto' },
        },
      }}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        minWidth={(theme) => ({ sm: theme.spacing(80), xs: '100%' })}
      >
        <Box p={4}>
          <Typography fontWeight={500} fontSize="1.25rem">
            {header}
          </Typography>
        </Box>
        <Box overflow="auto" p={5} flex={1}>
          {children}
        </Box>
        <Grid p={5} container columnSpacing={2}>
          <Grid item xs={6}>
            <Button type="submit" onClick={onSave} variant="contained" fullWidth>
              Save
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth onClick={handleOnClose}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Drawer>
  );
};
