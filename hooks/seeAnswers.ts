import { useEffect } from 'react';
import axios from '../axios';
import { QuestionT } from '../types/question';
import { useAppSelector } from './redux';

export const useSeeAnswers = (question:QuestionT) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const onSee = async () => {
        const dto = {
            questionId:question.id,
            userId
        };
        try{
            const res = await axios.post('/questions/seeAnswers',dto);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        if(userId){
            onSee();
        }
    },[userId])
}