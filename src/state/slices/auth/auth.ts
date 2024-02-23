import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, UserStateProps } from './auth.d';
import storage from '../../../drivers/storage';
import { AUTH_TOKEN, AUTH_TOKEN_EXPIRATION, REFRESH_TOKEN, USER_DATA } from '../../../constants/AUTH_STORAGE_KEYS';

const tokenExpirationStorage = storage.get(AUTH_TOKEN_EXPIRATION)

const initialState: AuthState = {
    isAuthenticated: false,
    token: storage.get(AUTH_TOKEN),
    refreshToken: storage.get(REFRESH_TOKEN),
    tokenExpiration: tokenExpirationStorage ? new Date(tokenExpirationStorage) : undefined,
    user: storage.getJSON<UserStateProps>(USER_DATA)
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, { payload }: PayloadAction<UserStateProps>) => {
            state.user = payload;
            storage.setJSON(USER_DATA, payload);
        },
        setAuthentication: (state, { payload }: PayloadAction<{ token: string, tokenExpiration: Date, refreshToken: string }>) => {
            const { token, tokenExpiration, refreshToken } = payload

            state = {
                ...state,
                token,
                tokenExpiration,
                refreshToken,
                isAuthenticated: !!token
            }

            storage.set(AUTH_TOKEN, token)
            storage.set(REFRESH_TOKEN, refreshToken)
            storage.set(AUTH_TOKEN_EXPIRATION, tokenExpiration.toUTCString())
        },
        removeAuthentication: (state) => {
            state.token = null!,
                state.tokenExpiration = null!
            state.refreshToken = null!
            state.isAuthenticated = false

            storage.remove(AUTH_TOKEN)
            storage.remove(REFRESH_TOKEN)
            storage.remove(AUTH_TOKEN_EXPIRATION)
        },
    },
})

export const { removeAuthentication, setAuthentication, setUser } = authSlice.actions

export default authSlice.reducer