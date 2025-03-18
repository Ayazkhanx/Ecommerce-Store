import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authenticated: false,
    user: null,
    isLoading: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    
})