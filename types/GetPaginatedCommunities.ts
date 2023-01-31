import { CommunityT } from './community';
export type GetPaginatedCommunities = {
    data:{
        communities:CommunityT[],
        total:number
    }
}