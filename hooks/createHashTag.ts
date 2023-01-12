import { useAppSelector } from './redux';
import { CreateHashTag } from './../types/hash-tag';
import axios from '../axios';

export const useCreateHashTag = () => {
    const creatorId = useAppSelector(state => state).userReducer.user?.id;
    const onCreateHashTag = async (dto:CreateHashTag) => {
        try{
            const res = await axios.post('/hash-tags/create',{name:dto.name,description:dto.description,creatorId});
        }catch(err){
            console.log(err);
        }
    }

    return {onCreateHashTag};
}