import React, {createContext, useState, useCallback } from 'react';
import ICredentiaslWriter from '../interface/ICredentiaslWriter';
import api from '../service/api';


interface IUser {
    id: number;
    name: string;
    email: string;
    active: string;
    created_at: Date | string;
    updated_at: Date | string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

export interface IAuthContextState {
    user: IUser;
    token: string;    
    signIn(credentials: ICredentiaslWriter): Promise<void>;
    signOut(): void;
}
export const AuthContext = createContext<IAuthContextState>(
    {} as IAuthContextState,
  );

export const AuthProvider: React.FC<IAuthContextState> = ({children}) => {
    const [data, setData] = useState<IAuthState>(() => {
        const token = localStorage.getItem('BookListToken'); //save token to do not lost the session 
        const user = localStorage.getItem('BookListUser');
    
        if (token && user) {
            return { token, user: JSON.parse(user) };
        }
    
        return {} as IAuthState;
    });

    const signIn = useCallback(async (credentials: ICredentiaslWriter) => {
        const response = await api.post('/sessions', credentials);
    
        const { token, user } = response.data;
    
        localStorage.setItem('BookListToken', token);
        localStorage.setItem('BookListUser', JSON.stringify(user));
    
        setData({
          token,
          user,
        });
      }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('BookListToken');
        localStorage.removeItem('BookListUser');
    
        setData({} as IAuthState);
    }, []);

    return (        
            <AuthContext.Provider
            value={{ signIn, user: data.user, token: data.token, signOut }}
            >
            {children}
            </AuthContext.Provider>
        )
}      