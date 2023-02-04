import Cookies from 'js-cookie';
import { userSlice } from './../store/reducers/UserSlice';
import { notification, StepProps } from 'antd';
import { FirstStepRegistrationT, FirstStepRegistrationResT, SecondStepT } from './../types/registration';
import axios from "../axios";
import axios_ from "axios";
import { useState } from "react"
import { useAppDispatch, useAppSelector } from './redux';
import { NotificationPlacement } from 'antd/es/notification/interface'
import { UserT } from '../types/user';

export const useRegistration = (onSuccess:() => void) => {
    const [step,setStep] = useState(1);
    const [success,setSuccess] = useState(false);
    const [err,setErr] = useState<any>();
    const [items,setItems] = useState<Record<number,StepProps>>({
        1:{title:'Main',status:'finish',icon:'user'},
        2:{title:'Details',status:'wait',icon:'orders'},
    });
    const [userId,setUserId] = useState<number>();
    const dispatch = useAppDispatch();

    const onConfirmFirstStep = async (dto:FirstStepRegistrationT) => {
        try{
            const res = await axios.post<FirstStepRegistrationResT>('/auth/register',dto);
            if(res.status == 201){
                setStep(2);
                Cookies.set('token',res.data.token);
                dispatch(userSlice.actions.authMeSuccess({...res.data.user}));
                setItems(items => ({...items,[2]:({...items[2],status:'finish'})}));
                setUserId(res.data.user.id);
                onSuccess();
            }
        }catch(err){
            setErr(err);
            console.log(err);
        }
    }

    const onConfirmSecondStep = async (dto:SecondStepT) => {
        try{
            setItems(items => ({...items,[2]:({...items[2],status:'process'})}));
            const {avatar,...detailedDto} = dto;
            const user = useAppSelector(state => state).userReducer.user;
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
            
            const detailedRes = await axios.patch<{user:UserT,token:string}>('/users/setDetailedInfo',{...detailedDto,userId,avatarPath});
            if(detailedRes.status == 200){
                Cookies.set('token',detailedRes.data.token);
                user && dispatch(userSlice.actions.setDetailed({...user,name:detailedRes.data.user.name,avatar:{path:avatarPath}}))
                setItems(items => ({...items,[2]:({...items[2],status:'finish'})}));
                setSuccess(true);
            }
        }catch(err){
            console.log(err);
        }
    }

    return {onConfirmFirstStep,items,step,setStep,success,err,onConfirmSecondStep,}
}