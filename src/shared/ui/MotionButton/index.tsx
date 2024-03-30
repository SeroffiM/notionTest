import { ForwardedRef, forwardRef } from 'react';
import { Button, ButtonProps } from '@mui/material';
import { motion } from 'framer-motion';

const TableButtonComponent = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => <Button {...props} ref={ref} />,
);

export const MotionButton = motion(TableButtonComponent);
