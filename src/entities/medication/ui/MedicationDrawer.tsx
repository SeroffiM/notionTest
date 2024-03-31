import { DrawerComponent } from '@/shared/ui/Drawer';
import { DrawerProps, Stack, TextField } from '@mui/material';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { IMedication } from '../types';
import { defaultValue, schema } from '../helpers/form.helpers';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';
import { MedicationContext } from '@/app/providers/MedicationProvider/medication.context';
import {
  addMedication,
  editMedication,
} from '@/app/providers/MedicationProvider/store/medications.actions';

interface IMedicationDrawerProps extends DrawerProps {
  medication?: IMedication;
  onClose: () => void;
}

export const MedicationDrawer = ({ medication, onClose, ...props }: IMedicationDrawerProps) => {
  const isEdit = !!medication;
  const { dispatch } = useContext(MedicationContext);
  const methods = useForm<IMedication>({
    defaultValues: defaultValue,
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit,
    reset,
    trigger,
    formState: { isSubmitSuccessful, isSubmitted },
  } = methods;

  const handleOnClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (value: IMedication) => {
    if (isEdit) {
      dispatch(editMedication(value));
    } else {
      dispatch(addMedication(value));
    }
    handleOnClose();
  };

  const handleOnChange = (v: string, onChange: (v: number) => void) => {
    onChange(+v);
    if (isSubmitted) {
      trigger('intakesCount');
    }
  };

  useEffect(() => {
    if (medication) {
      reset(medication);
    }
  }, [medication, reset]);

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful, reset]);

  return (
    <DrawerComponent
      onSave={handleSubmit(onSubmit)}
      onClose={handleOnClose}
      {...props}
      header="Add Medication"
    >
      <FormProvider {...methods}>
        <Stack spacing={5}>
          <Controller
            name="name"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Name"
                helperText={error?.message}
                error={!!error}
              />
            )}
          />
          <Controller
            name="description"
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                fullWidth
                variant="filled"
                label="Description"
                helperText={error?.message}
                error={!!error}
              />
            )}
          />
          <Controller
            name="intakesCount"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={(e) => handleOnChange(e.target.value, onChange)}
                InputProps={{
                  inputProps: { min: 0 },
                }}
                type="number"
                fullWidth
                variant="filled"
                label={isEdit ? 'Intakes Count' : 'Initial Count'}
                helperText={error?.message}
                error={!!error}
              />
            )}
          />
          <Controller
            name="destinationCount"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                value={value}
                onChange={(e) => handleOnChange(e.target.value, onChange)}
                InputProps={{
                  inputProps: { min: 0 },
                }}
                type="number"
                fullWidth
                variant="filled"
                label="Destination Count"
                helperText={error?.message}
                error={!!error}
              />
            )}
          />
        </Stack>
      </FormProvider>
    </DrawerComponent>
  );
};
