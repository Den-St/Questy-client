import { useState } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';

export const useCorrectAnswer = (answer:AnswerT) => {
    const [correctLoading,setLoading] = useState(false);
    const [isCorrect,setIsCorrect] = useState(answer.correct);

    const onCorrect = async () => {
        setLoading(true);
        try{
            setIsCorrect(prev => !prev);
            const dto = {
                answerId:answer.id
            }
            const res = await axios.post('/answers/correct',dto);
        }catch(err){
            console.log(err);
            setLoading(false);
        }
        setLoading(false);
    }

    return {correctLoading,isCorrect,onCorrect};
}