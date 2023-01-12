import {AppDispatch} from "../index";
import axios, {getConfig} from "../../axios";
import {UserT} from "../../types/user";
import {userSlice} from "./UserSlice";

export const authMe = () => async (dispatch:AppDispatch) => {
    try{
        dispatch(userSlice.actions.authMe());
        const res = await axios.get<UserT>('auth/getMe', getConfig());
        console.log('me',res.data);
        dispatch(userSlice.actions.authMeSuccess({...res.data}));
    }catch(err){
        dispatch(userSlice.actions.authMeFail("authMe err redux"))
    }
}

export const logoutMe = () => (dispatch:AppDispatch) => {
    try{
        dispatch(userSlice.actions.logout());
        dispatch(userSlice.actions.logoutSuccess());
    }catch(err){
        dispatch(userSlice.actions.authMeFail("logout err redux"))
    }
}

