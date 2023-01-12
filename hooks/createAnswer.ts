import { useRouter } from 'next/router';
import axios from '../axios';
import { useAppSelector } from './redux';

export const useCreateAnswer = () => {
    const creatorId = useAppSelector(state => state).userReducer.user?.id;
    const questionId = useRouter().query.id;

    const create = async (text:string) => {
        try{
            const dto = {
                creatorId,
                questionId,
                text
            }
            const res = await axios.post('/answers/create',dto);
        }catch(err){
            console.log(err);
        }
    }

    return {create};
}