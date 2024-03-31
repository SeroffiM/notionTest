import { ReactNode } from 'react';

export const withBasicProvider =
  (Provider: (prop: { children: ReactNode }) => JSX.Element) =>
  (WrappedComponent: () => JSX.Element) =>
  (props: Record<string, unknown>) => (
    <Provider>
      <WrappedComponent {...props} />
    </Provider>
  );
