import { useEffect, useState } from "react"
import axios from "../axios";
import { HashTagT } from "../types/hash-tag"

export const useSummaryHashTags = (userId:number) => {
    const [hashTags,setHashTags] = useState<HashTagT[]>([]);
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
            const res = await axios.post<{hashTags:HashTagT[],total:number}>(`/hash-tags/getCreatedHashTagsPaginated`,dto);
            setHashTags(res.data.hashTags);
        }catch(err){
            console.log(err);
        }
        setLoading(false)
    }

    const onChangeOrderRule = (value:string) => {
        setOrderRule(JSON.parse(value));
    }

    useEffect(() => {
        fetch();
    },[]);

    return {hashTags,loading,onChangeOrderRule,orderRule:JSON.stringify(orderRule)};
}