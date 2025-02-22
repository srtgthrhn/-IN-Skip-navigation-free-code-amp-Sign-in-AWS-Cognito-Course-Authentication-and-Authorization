import React, { createContext, useState } from 'react';

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState();

    return (
        <authContext.Provider value={{ auth, setAuth }}>
            {children}
        </authContext.Provider>
    );
};

export { authContext, AuthContextProvider };
