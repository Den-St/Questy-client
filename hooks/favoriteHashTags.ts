import { useState, useEffect } from 'react';
import axios from '../axios';
import { HashTagT } from '../types/hash-tag';
import { UserT } from '../types/user';
import { useAppSelector } from './redux';
export const useFavoriteHashTags = () => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const [hashTags,setHashTags] = useState<number[]>([]);
    const [loading,setLoading] = useState(false);

    const fetch = async () => {
        try{
            const res = await axios.get<UserT>(`/users/getFavoriteHashTags/${userId}`);
            setHashTags(res.data.favoriteHashTags.map(hashTag => hashTag.id));
        }catch(err){
            console.log(err);
        }
    }
    
    const isFavorite = (id:number) => {
        return hashTags.some(hashTagId => hashTagId === id);
    }

    const onToggleFavorite = async (id:number) => {
        if(isFavorite(id)){
            setLoading(true);
            setHashTags(prev => [...prev.filter(hashTagId => hashTagId !== id)]);
            try{   
                const dto = {
                    userId,
                    hashTagId:id
                }

                await axios.post('/users/removeFavoriteHashTag',dto);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
            setLoading(false);
            return;
        }

        setLoading(true);
        setHashTags(prev => [...prev,id]);
        try{   
            const dto = {
                userId,
                hashTagId:id
            }

            await axios.post('/users/addToFavoriteHashTag',dto);
        }catch(err){
            console.log(err);
            setLoading(false);
        }
        setLoading(false);
        return;
    }

    useEffect(() => {
        if(userId) fetch();
    },[userId]);


    return {favoriteLoading:loading,isFavorite,onToggleFavorite};
}