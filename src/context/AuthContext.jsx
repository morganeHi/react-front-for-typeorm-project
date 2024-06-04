import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const authenticated = Cookies.get('authenticated');
        return !!authenticated;
    });

    useEffect(() => {
        /*const allCookies = Cookies.get();  
        console.log('All Cookies:', allCookies);*/
        const authenticated = Cookies.get('authenticated');
        setIsAuthenticated(!!authenticated);
    }, []);
  
    const login = () => {
        setIsAuthenticated(true);
        console.log("Logged in");
    };

    const logout = () => {
        setIsAuthenticated(false);
        Cookies.remove('authenticated');
        console.log("Logged out");
    };
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use the Auth context : 
export const useAuth = () => {
    return useContext(AuthContext);
};