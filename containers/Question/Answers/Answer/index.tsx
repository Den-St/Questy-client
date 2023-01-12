import { AnswerComponent } from "../../../../components/Question/Answers/Answer"
import { useAnswerRating } from "../../../../hooks/answerRating"
import { useCorrectAnswer } from "../../../../hooks/correctAnswer";
import { AnswerT } from "../../../../types/answer"

type Props = {
    answer:AnswerT;
}

export const AnswerContainer:React.FC<Props> = ({answer}) => {
    const {rates,ratesLoading,rating,onUp,onDown} = useAnswerRating(answer);
    const {isCorrect,onCorrect,correctLoading} = useCorrectAnswer(answer);
    
    return <AnswerComponent isCorrect={isCorrect} onCorrect={onCorrect} correctLoading={correctLoading} answer={answer} onUp={onUp} onDown={onDown} rates={rates} ratesLoading={ratesLoading} rating={rating}/>
}