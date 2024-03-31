import { ReactNode } from 'react';

export const withBasicProvider =
  (Provider: (prop: { children: ReactNode }) => JSX.Element) =>
  (WrappedComponent: () => JSX.Element) =>
  (props: any) => (
    <Provider>
      <WrappedComponent {...props} />
    </Provider>
  );
