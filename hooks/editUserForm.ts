import { useAppSelector } from './redux';
import {SecondStepT} from '../types/registration';
import axios_ from 'axios';
import axios from '../axios';
import { UserT } from '../types/user';
import { useDispatch } from 'react-redux';
import { userSlice } from '../store/reducers/UserSlice';
import Cookies from 'js-cookie';
import { useState } from 'react';

export const useEditUserForm = () => {
    const [success,setSuccess] = useState(false);
    const userId = useAppSelector(state => state.userReducer.user?.id);
    const dispatch = useDispatch();
    const [isOnLogout,setOnLogout] = useState(false);

    const onConfirm = async (dto:SecondStepT) => {
        try{
            const {avatar,...detailedDto} = dto;
            let avatarPath = '';
            
            if(avatar?.file?.originFileObj) {   
                //@ts-ignore
                const avatarFile = avatar?.file?.originFileObj as string;

                const formdata = new FormData();
                formdata.append('file', avatarFile)
    
                const uploadAvatar = await axios_<{avatarPath:string}>({
                    url:"http://localhost:4000/avatars/uploadFile",
                    method:"post",
                    data:formdata
                });
    
                avatarPath = uploadAvatar.data.avatarPath;
            }
            
            const detailedRes = await axios.patch<{user:UserT,token:string}>('/users/edit',{...detailedDto,userId,avatarPath});
            if(detailedRes.status == 200){
                Cookies.set('token',detailedRes.data.token);
                dispatch(userSlice.actions.setDetailed({...detailedRes.data.user}))
                setSuccess(true);
            }
        }catch(err){
            console.log(err);
        }
    }

    const onLogout = () => {
        setOnLogout(true);
        Cookies.remove('token');
        dispatch(userSlice.actions.logout());
    }

    return {success,onConfirm,onLogout,isOnLogout};
}