import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '../axios';
import { AnswerT } from '../types/answer';

export const useGetQuestionAnswers = () => {
    const questionId = useRouter().query.id;
    const [answers,setAnswers] = useState<AnswerT[]>();
    const [answersLoading,setAnswersLoading] = useState(false);

    const fetch = async () => {
        setAnswersLoading(true);
        try{
            const res = await axios.get<AnswerT[]>(`/answers/getByQuestionId`,{params:{questionId}});
            setAnswers(res.data);
        }catch(err){
            console.log(err);
        }
        setAnswersLoading(false);
    }

    useEffect(() => {
        fetch();
    },[]);

    return {answers,answersLoading};
}