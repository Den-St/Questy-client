import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import axios from '../axios';
import { HashTagT } from '../types/hash-tag';
import { UserT } from '../types/user';
import { useAppSelector } from './redux';
import { userSlice } from '../store/reducers/UserSlice';
export const useFavoriteHashTags = () => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    const [hashTags,setHashTags] = useState<number[]>([]);
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();

    const fetch = async () => {
        try{
            const res = await axios.get<UserT>(`/users/getFavoriteHashTags`,{params:{userId}});
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

                const res = await axios.post<{user:UserT,token:string}>('/users/removeFavoriteHashTag',dto);

                Cookies.set('token',res.data.token);
                dispatch(userSlice.actions.setDetailed({...res.data.user,favoriteHashTags:res.data.user.favoriteHashTags}))
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

            const res = await axios.post<{user:UserT,token:string}>('/users/addToFavoriteHashTag',dto);
            Cookies.set('token',res.data.token);
            dispatch(userSlice.actions.setDetailed({...res.data.user,favoriteHashTags:res.data.user.favoriteHashTags}))
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