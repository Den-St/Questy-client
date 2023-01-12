import { useAppDispatch } from './redux';
import { userSlice } from './../store/reducers/UserSlice';
import Cookies from 'js-cookie';
import { useState } from 'react';
import axios from '../axios';
import { LoginT } from '../types/login';
import { authMe } from "./../store/reducers/ActionCreators";

export const useLogin = () => {
    const dispatch = useAppDispatch();
    const [success,setSuccess] = useState(false);
    const [err,setErr] = useState<any>();
    const onLogin = async (dto:LoginT) => {
        try{
            const res = await axios.post<{token:string}>('/auth/login',dto);
            if(res.status != 201) return;
            Cookies.set('token',res.data.token);
            dispatch(authMe());
            setSuccess(true);
        }catch(err) {
            setErr(err);
            console.log(err);
        }
    }

    return {onLogin,success,err};
}