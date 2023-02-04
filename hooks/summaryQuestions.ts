import { useEffect, useState } from 'react';
import axios from '../axios';
import { urlSearchParams } from '../helpers/urlSearchParams';
import { QuestionT } from '../types/question';
export const useSummaryQuestions = (userId:number) => {
    const [questions,setQuestions] = useState<QuestionT[]>([]);
    const [loading,setLoading] = useState(false);
    const [orderRule,setOrderRule] = useState<{fieldName:string,orderValue:string}>({fieldName:'createdAt',orderValue:'DESC'});

    const fetch = async () => {
        setLoading(true);
        try{
            const dto = {
                userId,
                fieldName:orderRule.fieldName,
                orderValue:orderRule.orderValue,
                pageSize:5
            }

            const res = await axios.get<{questions:QuestionT[],total:number}>(`/questions/getByUserIdPaginated`,{params:dto});
            setQuestions(res.data.questions);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    const onChangeOrderRule = (value:string) => {
        setOrderRule(JSON.parse(value));
    }

    useEffect(() => {
        fetch();
    },[orderRule.fieldName,orderRule.orderValue]);
    
    return {questions,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
}