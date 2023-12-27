import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TokenState } from '../../interfaces/interfaces';

const initialState: TokenState = {
    login: false,
    access_token: '',
    refresh_token: '',
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        userLogin: (state, action: PayloadAction<TokenState>) => {
            state.login = true;
            state.access_token = action.payload.access_token;
            state.refresh_token = action.payload.refresh_token;
        },
        userLogout: (state) => {
            state.login = false;
            state.access_token = '';
            state.refresh_token = '';
        }
    },
});

export const {userLogin, userLogout} = loginSlice.actions;
export default loginSlice.reducer;