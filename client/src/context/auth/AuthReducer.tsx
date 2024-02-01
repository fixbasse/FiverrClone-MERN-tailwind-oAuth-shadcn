// import { AuthAction, AuthState } from "./AuthContext";

// export const authReducer = (state: AuthState, action: AuthAction) => {
//     switch (action.type) {
//         case 'LOGIN_START':
//             return {
//                 currentUser: null,
//                 isLoading: true,
//                 error: false,
//             };
//         case 'LOGIN_SUCCESS':
//             return {
//                 currentUser: action.payload,
//                 isLoading: false,
//                 error: false,
//             };
//         case 'LOGIN_FAILURE':
//             return {
//                 currentUser: null,
//                 isLoading: false,
//                 error: true,
//             };
//         case 'LOGOUT':
//             localStorage.removeItem('currentUser');
//             return {
//                 currentUser: null,
//                 isLoading: false,
//                 error: false,
//             };
//         default:
//             return state;
//     }
// }