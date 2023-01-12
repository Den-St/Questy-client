import { AnswerT } from "./answer";
import { HashTagT } from "./hash-tag";
import { UserT } from "./user";

export type QuestionT = {
    id:number;
    createdAt:string;
    title:string;
    body:string;
    hashTags:HashTagT[];
    creator:UserT;
    answers:AnswerT[];
    answersNumber:number;
    rating:number;
    haveCorrectAnswer:boolean;
    views:number;
    ratedUpUsers:UserT[];
    ratedDownUsers:UserT[];
    subscribers:UserT[];
}