import { QuestionComponent } from "../../components/Question"
import { useQuestionRating } from "../../hooks/questionRating"
import { useQuestionView } from "../../hooks/questionView"
import { useSeeAnswers } from "../../hooks/seeAnswers"
import { useSubscribe } from "../../hooks/subscribe"
import { QuestionT } from "../../types/question"

type Props = {
    question:QuestionT
}

export const QuestionContainer:React.FC<Props> = ({question}) => {
    const {rates,rating,onDown,onUp,ratesLoading} = useQuestionRating(question);
    const {onSubscribe,subscribeLoading,isSubscribed} = useSubscribe(question);
    useQuestionView(question);
    useSeeAnswers(question);
    return <QuestionComponent isSubscribed={isSubscribed} onSubscribe={onSubscribe} subscribeLoading={subscribeLoading}
            ratesLoading={ratesLoading} onDown={onDown} onUp={onUp} rating={rating} rates={rates} question={question}/>
}