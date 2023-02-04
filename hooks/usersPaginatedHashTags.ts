import { useEffect, useState } from 'react';
import axios from '../axios';
import { urlSearchParams } from '../helpers/urlSearchParams';
import { HashTagT } from '../types/hash-tag';

export const useUsersPaginatedHashTags = (userId:number) => {
    const [hashTags,setHashTags] = useState<HashTagT[]>([]);
    const [total,setTotal] = useState<number>(0);
    const [loading,setLoading] = useState(false);
    const [page,setPageNumber] = useState<number>(Number(1));
    const [orderRule,setOrderRule] = useState<{fieldName:string,orderValue:string}>({fieldName:'createdAt',orderValue:'DESC'});

    const fetch = async () => {
        setLoading(true);
        const dto = {
            userId,
            page,
            fieldName:orderRule.fieldName,
            orderValue:orderRule.orderValue,
            pageSize:10
        };
        const params = urlSearchParams(dto);

        try{
            const res = await axios.get<{hashTags:HashTagT[],total:number}>(`/hash-tags/getCreatedHashTagsPaginated`,{params:dto});

            setHashTags(res.data.hashTags);
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

    return {page,total,hashTags,onChangePage,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
}