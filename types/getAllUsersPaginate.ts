import { UserT } from './user';
export type GetAllUsersPaginateT = {
    data:{
        users:UserT[],
        total:number
    }
    
}