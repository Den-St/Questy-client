import { useEffect } from 'react';
import axios from '../axios';
import { QuestionT } from '../types/question';
import { useAppSelector } from './redux';
export const useQuestionView = (question:QuestionT) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const view = async () => {
        try{
            const dto = {
                questionId:question,
                userId
            }

            const res = await axios.post('/questions/view',dto)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        view();
    },[userId])
}