import * as React from 'react';
import { useAuth } from './useAuth';

const authContext = React.createContext();

export function AuthProvider({ children }) {
    const auth = useAuth();
    return(
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )
}