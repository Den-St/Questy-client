import { useAppSelector } from './redux';
import { useState, useEffect } from 'react';
import { QuestionT } from "../types/question";
import axios from '../axios';

export const useSubscribe = (question:QuestionT) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;
    const [subscribeLoading,setLoading] = useState(true);
    const [isSubscribed,setIsSubscribed] = useState(false);

    useEffect(() => {
        if(userId) {
            console.log(question.subscribers.some(user => user.id === userId))
            setIsSubscribed(question.subscribers.some(user => user.id === userId));
            setLoading(false);
        }
    },[userId])

    const onSubscribe = async () => {
        const dto = {
            userId,
            questionId:question.id
        }
        setLoading(true);
        if(!isSubscribed){
            setIsSubscribed(prev => !prev);
            try{
                
                const res = await axios.post('/questions/subscribe',dto);
                
            }catch(err){
                setIsSubscribed(prev => !prev);
                setLoading(false)
            }

            setLoading(false);

            return;
        }
        
        try{
            setIsSubscribed(prev => !prev);
            const res = await axios.post('/questions/unsubscribe',dto);
            setLoading(false)

        }catch(err){
            setIsSubscribed(prev => !prev);
            setLoading(false);
        }
        setLoading(false);
    }

    return {isSubscribed,subscribeLoading,onSubscribe};
}