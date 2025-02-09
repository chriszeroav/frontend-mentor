'use client';

import { FC, createContext, PropsWithChildren, useState } from 'react';

interface AppContextProps extends PropsWithChildren {}

interface AppContext {
  password: string;
  updatePassword: (a: string) => void;
}

export const AppContext = createContext<AppContext | null>(null);

export const AppProvider: FC<AppContextProps> = ({ children }) => {
  const [password, setPassword] = useState('');

  return (
    <AppContext.Provider
      value={{
        password,
        updatePassword: (a: string) => setPassword(a),
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
