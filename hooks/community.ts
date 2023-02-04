import { urlSearchParams } from './../helpers/urlSearchParams';
import { useAppSelector } from './redux';
import { useState, useEffect } from 'react';
import { CommunityT } from '../types/community';
import axios from '../axios';
import { UserT } from '../types/user';

export const useCommunity = (community:CommunityT) => {
    const [isJoined,setJoined] = useState(false);
    const [joinLoading,setJoinLoading] = useState(false);
    const [members,setMembers] = useState<UserT[]>([]);
    const [membersLoading,setMembersLoading] = useState(false);
    const user = useAppSelector(state => state).userReducer.user;
   

    const fetch = async () => {
        setMembersLoading(true);
        try{
            const dto = {
                page:1,
                pageSize:4,
                communityId:community.id
            }
            const res = await axios.get<UserT[]>(`/community/getMembers`,{params:{dto}});
            setMembers(res.data as UserT[]);
        }catch(err){
            console.log(err);
            setMembersLoading(false);
        }   
        setMembersLoading(false);
    }

    const onJoinToggle = async () => {
        setJoinLoading(true);

        const currIsJoined = isJoined;
        setJoined(prev => !prev);

        const dto = {
            userId:user?.id,
            communityId:community.id,
        }

        if(!currIsJoined){
            try{
                const res = await axios.post('/community/join',dto);
            }catch(err) {
                console.log(err);
            }
          
            setJoinLoading(false);
            return;
        }

        try{
            const res = await axios.post('/community/leave',dto);
        }catch(err) {
            console.log(err);
        }
        setJoinLoading(false);

    }

    useEffect(() => {
        fetch();
    },[community.id]);

    useEffect(() => {
        setJoined(members?.some(member => member.id === user?.id));
    },[members]);
    
    return {joinLoading,onJoinToggle,isJoined,setMembersLoading,membersLoading,members};
}