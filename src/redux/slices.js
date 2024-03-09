import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: localStorage.getItem("user")
    ? (localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token")
    ? (localStorage.getItem("token"))
    : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setUser(state, action){
            state.user = action.payload;
        },
        setToken(state, action){
            state.token = action.payload;
        },
        setLoading(state, action){
            state.loading = action.payload;
        }
    }
});

export const {setUser,setToken,setLoading} = authSlice.actions;

export default authSlice.reducer;
