import { formatedDate, formatT } from "../../helpers/formatedDate";
import { AnswerT } from "../../types/answer"
import { AnswerContainer, AnswersContainer,Date, AnswerText, Container, Header, Question } from "./styles"

type Props = {
    answers:AnswerT[];
    loading:boolean;
}

export const Messages:React.FC<Props> = ({answers,loading}) => {
    return <Container>
        <Header>Not readed answers</Header>
        <AnswersContainer>
            {!loading && answers?.map(answer => <AnswerContainer key={answer.id} href={`/questions/${answer.question.id}`}>
                <Question>Question:{answer.question.title}</Question>
                <AnswerText dangerouslySetInnerHTML={{__html:answer.text}}/>
                <Date>{formatedDate(answer.createdAt,formatT.dashed)}</Date>
            </AnswerContainer>)}
        </AnswersContainer>
    </Container>
}