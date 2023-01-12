import { useAppSelector } from './redux';
import { useEffect, useState } from "react";
import axios from "../axios";
import { QuestionTemplateT } from "../types/questionTemplate";

export const useGetTemplates = () => {
    const [templates,setTemplates] = useState<QuestionTemplateT[]>([]);
    const [templatesLoading,setTemplatesLoading] = useState(false);
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const fetch = async () => {
        setTemplatesLoading(true);
        try{
            const res = await axios.get<QuestionTemplateT[]>(`/question-templates/getAllByUserId/${userId}`);
            setTemplates(res.data);
        }catch(err){    
            console.log(err);
        }
        setTemplatesLoading(false);
    }

    useEffect(() => {
       userId && fetch();
    },[userId])

    return {templates,refetch:fetch,templatesLoading};
}