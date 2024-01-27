import { newRequest } from '@/lib/newRequest';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
    username?: string;
    email: string;
    password: string;
    isSeller?: boolean;
    userImg?: string;
};

export type UserLogin = User & {
    id?: string;
};

type AuthApiState = {
    currentUser?: UserLogin | null;
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
};

const initialState: AuthApiState = {
    currentUser: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo') as string)
        : null,
    status: 'idle',
    error: null,
};

//* Register 
export const resgister = createAsyncThunk('register', async (data: User) => {
    const res = await newRequest.post('/auth/register', data);
    const registerData = res.data;

    localStorage.setItem('userInfo', JSON.stringify(registerData));
    return registerData;
})

//* Login 
export const reduxLogin = createAsyncThunk('login', async (data: UserLogin) => {
    const res = await newRequest.post('/auth/login', data);
    const loginData = res.data;

    localStorage.setItem('userInfo', JSON.stringify(loginData));
    return loginData;
});

//* Logout 



//? Get User by ID
export const getUserById = createAsyncThunk('userData', async (userId: string) => {
    const res = await newRequest.get(`/user/${userId}`);

    return res.data;
});



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(reduxLogin.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(
                reduxLogin.fulfilled,
                (state, action: PayloadAction<UserLogin>) => {
                    state.status = 'idle';
                    state.currentUser = action.payload
                })
            .addCase(reduxLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Login failed.';
            })
    }
});

export default authSlice.reducer;