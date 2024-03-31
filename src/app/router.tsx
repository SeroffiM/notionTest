import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '@/widgets/PageLayout';
import { Page404 } from '@/pages/Page404';
import Medications from '@/pages/Medications/routes/Medications';
import { ROUTES } from '@/shared/constants/routes.constants';
import MedicationItem from '@/pages/Medications/routes/MedicationItem';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Medications />,
      },
      {
        path: ROUTES.MEDICATION,
        element: <MedicationItem />,
      },
    ],
  },
]);
