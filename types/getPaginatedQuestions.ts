import { QuestionT } from "./question"

export type GetPagintatedQuestions = {
    data:{
        questions:QuestionT[],
        total:number
    }
}