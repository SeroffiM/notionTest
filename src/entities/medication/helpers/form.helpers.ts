import * as yup from 'yup';
import { IMedication } from '../types';

export const defaultValue: IMedication = {
  name: '',
  description: '',
  intakesCount: 0,
  destinationCount: 0,
  uuid: '',
  updated: '',
  isFulfilled: true,
};

export const schema = yup
  .object({
    name: yup.string().required('Required'),
    description: yup.string().required('Required'),
    intakesCount: yup
      .number()
      .required('Required')
      .min(0, 'Must be greater than zero')
      .test('intakesCount', 'Must be less Destination Count', (val, context) => {
        const destinationCount = context?.from?.[0].value.destinationCount || 0;
        return val <= destinationCount;
      }),
    destinationCount: yup.number().required('Required').min(0, 'Must be greater than zero'),
    uuid: yup.string(),
    updated: yup.string(),
  })
  .required();
