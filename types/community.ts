import { HashTagT } from './hash-tag';
import { UserT } from './user';
export type CommunityT = {
    name:string,
    creator:UserT,
    members:UserT[],
    membersNumber:number,
    id:number,
    hashTags:HashTagT[]
}