import { UserT } from './../types/user';
import { HashTagT } from './../types/hash-tag';
import { useCallback, useState } from 'react';
import { QuestionT } from '../types/question';
import axios from '../axios';
import _debounce from 'lodash/debounce';

export const useGlobalSearch = () => {
    const [data,setData] = useState<{questions:QuestionT[],hashTags:HashTagT[],users:UserT[]}>
                                    ({questions:[],hashTags:[],users:[]});
    const [loading,setLoading] = useState(false);

    const search = async (name?:string) => {
        if(!name) {
            setData({questions:[],hashTags:[],users:[]});
            return;
        }
        setLoading(true);
        try{
            const res = await axios.get<{questions:QuestionT[],hashTags:HashTagT[],users:UserT[]}>(`/questions/globalSearch/${name}`);
            setData(res.data);
        }catch(err){    
            console.log(err);
        }
        setLoading(false);
    }

    const debounceRefetch = useCallback(_debounce(search, 400), []);

    return {debounceRefetch,loading,data};
}