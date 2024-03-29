import { createBrowserRouter } from 'react-router-dom';
import Medications from '@/pages/Medications';
import { PageLayout } from '@/widgets/PageLayout';
import { Page404 } from '@/pages/Page404';

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
    ],
  },
]);
