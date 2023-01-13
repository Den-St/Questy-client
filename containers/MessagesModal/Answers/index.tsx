import { AnswersMessages } from "../../../components/Messages/Answers";
import { useGetNotSeenAnswers } from "../../../hooks/getNotSeenAnswers";

export const Answers = () => {
    const {answers,loading} = useGetNotSeenAnswers();

    return <AnswersMessages answers={answers} loading={loading}/>
}