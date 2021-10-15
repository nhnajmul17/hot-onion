import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const Authprovider = ({ children }) => {
    const allcontexts = useFirebase();
    return (
        <AuthContext.Provider value={allcontexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;