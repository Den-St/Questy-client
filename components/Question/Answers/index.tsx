import { AnswerContainer } from "../../../containers/Question/Answers/Answer";
import { Container } from "../../../containers/Question/Answers/styles";
import { AnswerT } from "../../../types/answer";

type Props = {
    answers?:AnswerT[],
    answersLoading:boolean
}

export const AnswersComponent:React.FC<Props> = ({answers,answersLoading}) => {
    return <Container>
        {answers && answers.map(answer => <AnswerContainer answer={answer}/>)}
    </Container>
}