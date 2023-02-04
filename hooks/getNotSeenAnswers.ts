import { useAppSelector } from './redux';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';
import { UserT } from '../types/user';

export const useGetNotSeenAnswers = () => {
    const [loading,setLoading] = useState(false);
    const [answers,setAnswers] = useState<AnswerT[]>([]);
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const fetch = async () => {
        setLoading(true);
        try{
            const res = await axios.get<UserT>(`/users/getNotSeenAnswers`,{params:{userId}});
            setAnswers(res.data.notSeenAnswers);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(userId){
            fetch();
        }
    }
    ,[userId])

    return {answers,loading};
}