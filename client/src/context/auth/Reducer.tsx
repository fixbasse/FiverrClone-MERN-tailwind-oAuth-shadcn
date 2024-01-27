import { Reducer } from "react";
import { AuthAction } from "./Action";

export interface AuthState {
    isLoggedIn: boolean;
    authToken?: string;
    userId?: string;
    email?: string;
    password?: string;
};

export const defaultAuthState: AuthState = {
    isLoggedIn: false,
};

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
    if (action.type === 'LOG_IN') {
        localStorage.setItem('user', JSON.stringify(action.payload));
        return {
            ...state,
            isLoggedIn: true,
            authToken: action.payload.authToken,
            userId: action.payload.userId,
            email: action.payload.email,
            password: action.payload.password,
        };
    };

    if (action.type === 'LOG_OUT') {
        localStorage.removeItem('user');
        return defaultAuthState;
    }

    return defaultAuthState;
};

export default authReducer;