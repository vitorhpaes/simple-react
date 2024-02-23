interface UserStateProps {
    id: string
    fullName: string
    email: string
    avatarUrl?: string
}

export interface AuthState {
    user?: UserStateProps
    isAuthenticated: boolean
    token?: string
    tokenExpiration?: Date;
    refreshToken?: string
}