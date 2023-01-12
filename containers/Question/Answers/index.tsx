import { AnswersComponent } from "../../../components/Question/Answers"
import { useGetQuestionAnswers } from "../../../hooks/getQuestionAnswers";

export const Answers = () => {
    const {answers,answersLoading} = useGetQuestionAnswers();
    return <AnswersComponent answers={answers} answersLoading={answersLoading}/>
}