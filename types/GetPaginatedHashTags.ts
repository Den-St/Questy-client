import { HashTagT } from "./hash-tag"

export type GetPaginatedHashTags = {
    data:{
        hashTags:HashTagT[],
        total:number,
    }
}