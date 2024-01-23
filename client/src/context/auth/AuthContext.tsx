
// const INITIAL_STATE = {
//     currentUser: JSON.parse(localStorage.getItem('currentUser'))
// }

import { ReactNode, createContext, useEffect, useReducer } from "react"
import Reducer from "./Reducer";

interface Props {
    children?: ReactNode;
};

type IAuthContext = {
    currentUser: string | null;
    isFetching: boolean;
    error: boolean;
};

const INITIAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem('currentUser') || '{}'),
    isFetching: false,
    error: false,
};

export const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

// export const AuthContextProvider = ({ children }: Props) => {
//     const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)

//     useEffect(() => {
//         localStorage.setItem('currentUser', JSON.stringify(state.currentUser));
//     },)
// }