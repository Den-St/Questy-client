export type HashTagT = {
    name:string,
    id:number,
    questionsNumber:number,
    followersNumber:number,
    description:string
}

export type CreateHashTag = {
    name:string;
    description:string;
}