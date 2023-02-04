import { useRouter } from 'next/router';
import { useAppSelector } from './redux';
import { useState } from 'react';
import axios from '../axios';
import { QuestionTemplateT } from '../types/questionTemplate';

export const useAskQuestion = (refetch:() => void) => {
    const [chosenTemplate,setChosenTemplate] = useState<QuestionTemplateT | null>(null);
    const [seeSteps,setSeeSteps] = useState(true);
    const [chosenTemplateLoading,setChosenTemplateLoading] = useState(false);
    const [createTemplateLoading,setCreateTemplateLoading] = useState(false);
    const [createQuestionLoading,setCreateQuestionLoading] = useState(false);

    const userId = useAppSelector(state => state).userReducer.user?.id;
    const router = useRouter();

    const chooseTemplate = async (id:number) => {
        setChosenTemplateLoading(true);
        try{
            const res = await axios.get<QuestionTemplateT>(`/question-templates/get`,{params:{id}});
            setChosenTemplate(res.data);
        }catch(err){
            console.log(err)
        }
        setChosenTemplateLoading(false);
    }

    const cancelTemplate = () => {
        setChosenTemplate(null);
    }
    const onChangeSteps = () => {
        setSeeSteps(prev => !prev);
    }

    const onCreateTemplate = async (questionTemplate:{title:string,body:string,hashTags:string[]}) => {
        setCreateTemplateLoading(true);
        try{
            const dto = {
                creatorId:userId,
                ...questionTemplate
            }
            const res = await axios.post('/question-templates/create',dto);
            if(res.status === 201) await refetch();
        }catch(err){
            console.log(err);
        }
        setCreateTemplateLoading(false);
    }
    const onEditTemplate = async (questionTemplate:{title:string,body:string,hashTags:string[]}) => {
        setCreateTemplateLoading(true);
        try{
            const dto = {
                creatorId:userId,
                ...questionTemplate,
                templateId:chosenTemplate?.id
            }
            const res = await axios.patch('/question-templates/edit',dto);
            if(res.status === 200) await refetch();
        }catch(err){
            console.log(err);
        }
        setCreateTemplateLoading(false);
    }

    const onCreateQuestion = async (questionTemplate:{title:string,body:string,hashTags:string[]}) => {
        setCreateQuestionLoading(true);
        try{
            const dto = {
                creatorId:userId,
                ...questionTemplate,
            }
            const res = await axios.post('/questions/create',dto);
            if(res.status === 201 && chosenTemplate?.id) {
                setChosenTemplate(null);
                await axios.delete(`/question-templates/delete/${chosenTemplate?.id}`);
                await refetch();
            }
        }catch(err){
            console.log(err);
        }
        setCreateQuestionLoading(false);
    }

    return {onCreateQuestion,cancelTemplate,chooseTemplate,onChangeSteps,seeSteps,onEditTemplate,chosenTemplate,chosenTemplateLoading,onCreateTemplate}
}