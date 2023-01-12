import { useState, useEffect } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';

export const useUsersPaginatedAnswers = (userId:number) => {
    const [answers,setAnswers] = useState<AnswerT[]>([]);
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
            const res = await axios.post<{answers:AnswerT[],total:number}>('/answers/getByUserIdPaginated',dto);
            setAnswers(res.data.answers);
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

    return {page,total,answers,onChangePage,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
}