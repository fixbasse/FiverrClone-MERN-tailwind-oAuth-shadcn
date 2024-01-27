import { createContext, useCallback, useEffect, useReducer } from "react";
import authReducer, { AuthState, defaultAuthState } from "./Reducer";
import { AuthActionEnum } from "./Action";
import { useNavigate } from "react-router-dom";

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[];
};

export type UserData = {
    authToken: string;
    userId: string;
    email: string;
    password: string;
};

export interface AuthContext {
    authState: AuthState;
    globalLogInDispatch: (props: UserData) => void;
    globalLogOutDispatch: () => void;
};

const authContext = createContext<AuthContext>({
    authState: defaultAuthState,
    globalLogInDispatch: () => { },
    globalLogOutDispatch: () => { },
});

export const AuthContextProvider = (props: AuthProviderProps) => {
    const { children } = props;
    const [authState, dispatch] = useReducer(authReducer, defaultAuthState);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            const userData: UserData = JSON.parse(user);
            dispatch({ type: AuthActionEnum.LOG_IN, payload: userData });
        }
    }, []);

    const globalLogInDispatch = useCallback(
        (props: UserData) => {
            const { authToken, email, password, userId } = props;
            dispatch({
                type: AuthActionEnum.LOG_IN,
                payload: {
                    authToken,
                    userId,
                    email,
                    password,
                },
            });
            navigate('/become-a-seller/overview');
        }, [navigate]);

    const globalLogOutDispatch = useCallback(() => {
        dispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
        navigate('/')
    }, [navigate]);


    const ctx = {
        authState,
        globalLogInDispatch,
        globalLogOutDispatch,
    };

    return (
        <authContext.Provider
            value={ctx}
        >
            {children}
        </authContext.Provider>

    )
};

export default authContext;