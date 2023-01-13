import { AnswerT } from "./answer";
import { HashTagT } from "./hash-tag";
import { QuestionT } from "./question";

export type UserT = {
    name:string,
    email:string,
    id:number,
    avatar:{
        path:string
    },
    createdAt:string;
    location:string;
    birthdate:string;
    gender:string;
    occasion:string;
    about:string;
    rating:number;
    numberOfAnswers:number;
    numberOfQuestions:number;
    numberOfCreatedHashTags:number;
    createdHashTags:HashTagT[];
    favoriteHashTags:HashTagT[];
    subscribedQuestions:QuestionT[];
    notSeenAnswers:AnswerT[];
    correctAnswersOnSubscribedQuestions:AnswerT[];
}