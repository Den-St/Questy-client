import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from '../axios';
import {QuestionT} from '../types/question';

export const useUsersPaginatedQuestions = (userId:number) => {
    const [questions,setQuestions] = useState<QuestionT[]>([]);
    const [total,setTotal] = useState<number>(0);
    const [loading,setLoading] = useState(false);
    const [page,setPageNumber] = useState<number>(Number(1));
    const [orderRule,setOrderRule] = useState<{fieldName:string,orderValue:string}>({fieldName:'createdAt',orderValue:'DESC'});

    const fetch = async () => {
        setLoading(true);
        const dto = {
            userId,
            page,
            orderRule,
            pageSize:10
        };

        try{
            const res = await axios.post<{questions:QuestionT[],total:number}>('/questions/getByUserIdPaginated',dto);
            setQuestions(res.data.questions);
            setTotal(res.data.total);
            setLoading(false);
        }catch(err){
            console.log(err);
        }
    }

    const onChangePage = (pageNumber:number) => {
        setPageNumber(pageNumber);
    } 

    const onChangeOrderRule = (value:string) => {
        setOrderRule(JSON.parse(value));
    }

    useEffect(() => {
        fetch();
    },[page,orderRule.fieldName,orderRule.orderValue]);

    return {page,total,questions,onChangePage,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
}