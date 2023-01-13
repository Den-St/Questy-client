import { CorrectAnswers } from "../../../components/Messages/CorrectAnswers";
import { useGetCorrectAnswers } from "../../../hooks/getCorrectAnswers";

export const Correct = () => {
    const {answers,loading} = useGetCorrectAnswers();

    return <CorrectAnswers answers={answers} loading={loading}/>
}