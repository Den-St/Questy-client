import { formatedDate } from "../../../../../helpers/formatedDate"
import { AnswerT } from "../../../../../types/answer"
import { Answer, Rating, Left, Title, Date } from "./styles"
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
            <Title href={`/questions/`}>
                {answer.text}
            </Title>
        </Left>
        <Date>
            {formatedDate(answer.createdAt,formatT.dashed)}
        </Date>
    </Answer>
}