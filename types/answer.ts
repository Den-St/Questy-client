import { QuestionT } from "./question"
import { UserT } from "./user"

export type AnswerT = {
    id:number;
    text:string,
    creator:UserT,
    question:QuestionT,
    correct:boolean;
    rating:number;
    createdAt:string;
    ratedUpUsers:AnswerT[];
    ratedDownUsers:AnswerT[];
}