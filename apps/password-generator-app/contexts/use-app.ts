import { useContext } from 'react';
import { AppContext } from './app';

export const useApp = (): {
  password: string;
  updatePassword: (a: string) => void;
} => {
  const context = useContext(AppContext);

  if (!context) throw new Error('No context available');

  return context;
};
