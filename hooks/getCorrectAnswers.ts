import { useEffect } from 'react';
import { useState } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';
import { UserT } from '../types/user';
import { useAppSelector } from './redux';

export const useGetCorrectAnswers = () => {
    const userId = useAppSelector(state => state).userReducer.user?.id;
    const [answers,setAnswers] = useState<AnswerT[]>([]);
    const [loading,setLoading] = useState(false);

    const fetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get<UserT>(`/users/getCorrectAnswers`,{params:{userId}});
            setAnswers(res.data.correctAnswersOnSubscribedQuestions);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(userId) fetch();
    },[userId]);

    return {answers,loading};
}