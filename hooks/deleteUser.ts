import Cookies from 'js-cookie';
import { userSlice } from './../store/reducers/UserSlice';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useAppSelector } from "./redux";
import axios from '../axios';

export const useDeleteUser = () => {
    const [success,setSuccess] = useState(false);
    const userId = useAppSelector(state => state.userReducer.user?.id);
    const dispatch = useDispatch();

    const onDelete = async () => {
        try{
            const res = await axios.delete(`/users/delete/${userId}`);
            if(res.status === 200){
                setSuccess(true);
                dispatch(userSlice.actions.logout());
                Cookies.remove('token');
            }
        }catch(err){
            console.log(err);
        }
    }

    return {success,onDelete,userId};
}