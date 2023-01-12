import { formatedDate, formatT } from "../../../../../helpers/formatedDate"
import { QuestionT } from "../../../../../types/question"
import { Question, Title, Date, Left, Rating } from "./styles"

type Props = {
    question:QuestionT
}

export const QuestionItem:React.FC<Props> = ({question}) => {
    return <Question>
        <Left>
            <Rating $haveCorrectAnswer={question.haveCorrectAnswer}>
                {question.rating}
            </Rating>
            <Title href={`/questions/`}>
                {question.title}
            </Title>
        </Left>
        <Date>
            {formatedDate(question?.createdAt,formatT.dashed)}
        </Date>
    </Question>
}