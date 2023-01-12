import Cookies  from 'js-cookie';
import { UserT} from "../../types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    user:UserT | null,
    isLoading:boolean,
    error:string | undefined
}


const initialState:UserState = {
    user:null,
    isLoading:false,
    error:""
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        authMe(state) {
            state.isLoading = true;
        },
        authMeSuccess(state,action:PayloadAction<UserT>) {
            console.log('payload',action.payload)
            state.isLoading = false;
            state.user = action.payload;
            state.error = "";
        },
        setDetailed(state,action:PayloadAction<UserT>){
            // if(state.user?.name) state.user.name = action.payload.name;
            // if(state.user?.avatar) state.user.avatar.path = action.payload.avatarUrl;
            state.user = action.payload
        },
        authMeFail(state,action:PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.user = null;
            state.isLoading = true;
        },
        logoutSuccess(state) {
            state.isLoading = false
            state.user = null;
            state.error = ""
            Cookies.remove('token');
        },
        logoutFail(state,action:PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default userSlice.reducer;