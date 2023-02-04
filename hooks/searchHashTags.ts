import { useCallback, useState } from 'react';
import axios from "../axios";
import { HashTagT } from "../types/hash-tag";
import _debounce from 'lodash/debounce';


export const useSearchHashTags = () => {
    const [hashTags,setHashTags] = useState<HashTagT[]>([]);
    const [loading,setLoading] = useState(false);
    
    const search = async (value?: string) => {
        if(!value) {
            setHashTags([]);
            return;
        }
        setLoading(true);
        try{
            const res = await axios.get<HashTagT[]>(`/hash-tags/searchByName`,{params:{name:value}});
            setHashTags(res.data as HashTagT[]);
        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }
    
    const debounceRefetch = useCallback(_debounce(search, 400), []);

    return {debounceRefetch,hashTags,loading};
}