import { useContext } from 'react';
import { AuthContext, IAuthContextState } from '../context/Auth';

export default function useAuth(): IAuthContextState {
  const context = useContext(AuthContext);

  return context;
}