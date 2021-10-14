import React, { createContext } from 'react';
import Usefirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = Usefirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;