import { configureStore } from "@reduxjs/toolkit";
import authReducer from './redux-tool/slices/authSlice'
import userReducer from './redux-tool/slices/userSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;