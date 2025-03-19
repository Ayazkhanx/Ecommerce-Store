import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authenticated: false,
    user: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.authenticated = true
        },
    }
    
})

export const { setUser } = authSlice.actions
export default authSlice.reducer