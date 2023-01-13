import { Spin } from "antd";
import { formatedDate, formatT } from "../../../helpers/formatedDate";
import { AnswerT } from "../../../types/answer"
import { AnswerContainer, AnswersContainer,Date, AnswerText, Container, Header, Question, NoAnswers } from "./styles"
import {Loading3QuartersOutlined} from '@ant-design/icons';

type Props = {
    answers:AnswerT[];
    loading:boolean;
}

export const AnswersMessages:React.FC<Props> = ({answers,loading}) => {
    return <AnswersContainer>
            {!loading && answers?.map(answer => <AnswerContainer key={answer.id} href={`/questions/${answer.question.id}`}>
                <Question>Question:{answer.question.title}</Question>
                <AnswerText dangerouslySetInnerHTML={{__html:answer.text}}/>
                <Date>{formatedDate(answer.createdAt,formatT.dashed)}</Date>
            </AnswerContainer>)}
            {loading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
            {!loading && !answers.length && <NoAnswers>No answers</NoAnswers>}
        </AnswersContainer>
}