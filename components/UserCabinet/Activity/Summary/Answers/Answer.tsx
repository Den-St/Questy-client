import { formatedDate } from "../../../../../helpers/formatedDate"
import { AnswerT } from "../../../../../types/answer"
import { Answer, Rating, Left, Title, Date, Text } from "./styles"
import {formatT} from '../../../../../helpers/formatedDate';
type Props = {
    answer:AnswerT
}

export const AnswerItem:React.FC<Props> = ({answer}) => {
    return <Answer>
        <Left>
            <Rating $isCorrect={true}>
                {answer.rating}
            </Rating>
            {/* <Title href={`/questions/${answer.question.id}`}>
                {answer.text}
            </Title> */}
            <Text dangerouslySetInnerHTML={{__html:answer.text}} href={`/questions/${answer.question.id}`}/>
                
        </Left>
        <Date>
            {formatedDate(answer.createdAt,formatT.dashed)}
        </Date>
    </Answer>
}