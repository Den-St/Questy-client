import { useState, useEffect } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';

export const useSummaryAnswers = (userId:number) => {
    const [answers,setAnswers] = useState<AnswerT[]>([]);
    const [loading,setLoading] = useState(false);
    const [orderRule,setOrderRule] = useState<{fieldName:string,orderValue:string}>({fieldName:'createdAt',orderValue:'DESC'});

    const fetch = async () => {
        setLoading(true);
        const dto = {
            userId,
            orderRule,
            pageSize:5
        }

        try{
            const res = await axios.post<{answers:AnswerT[],total:number}>(`/answers/getByUserIdPaginated`,dto);
            setAnswers(res.data.answers);
        }catch(err){
            console.log(err)
        }
        setLoading(false);
    }

    const onChangeOrderRule = (value:string) => {
        setOrderRule(JSON.parse(value));
    }

    useEffect(() => {
        fetch();
    },[orderRule.fieldName,orderRule.orderValue])

    return {answers,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
} 