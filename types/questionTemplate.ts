import { HashTagT } from "./hash-tag";
import { UserT } from "./user";

export type QuestionTemplateT = {
    title:string;
    id:number;
    body:string;
    creator:UserT;
    hashTags:HashTagT[];
    createdAt:string;
}

export type GetUsersQuestionTemplates = {
    data:QuestionTemplateT[]
}