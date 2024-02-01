import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, userByPhone } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [isUserValidate, setIsUserValidate] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsRegister(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    };

    const singin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    }

    const getUserByPhone = async (user) => {
        try {
            const res = await userByPhone(user);
            console.log(res);
            setUser(res.data);
            setIsUserValidate(true);
        } catch (error) {
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [errors])

    return (
        <AuthContext.Provider
            value={{
                signup,
                singin,
                getUserByPhone,
                user,
                isRegister,
                isAuthenticated,
                isUserValidate,
                errors
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};