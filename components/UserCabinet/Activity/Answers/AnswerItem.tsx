import { formatedDate, formatT } from "../../../../helpers/formatedDate"
import { AnswerT } from "../../../../types/answer"
import { AnswersContainer, Date,DateContainer, HashTag, HashTagsContainer, QuestionContainer, RatingContainer, RatingNumber, StatsContainer, Title } from "../Questions/styles"
import {CheckOutlined} from "@ant-design/icons"
type Props = {
    answer:AnswerT
}

export const AnswerItem:React.FC<Props> = ({answer}) => {
    return <QuestionContainer>
        <StatsContainer>

            <RatingContainer>
                <RatingNumber>
                    {answer.rating}
                </RatingNumber>
                    votes
            </RatingContainer>

            {answer.correct && <AnswersContainer $haveCorrectAnswer={answer.correct}>
                <CheckOutlined/> Accepted
            </AnswersContainer>}

        </StatsContainer>

        <Title href={`/questions/${answer.question.id}`}>
            {answer.question.title}
        </Title>

        <HashTagsContainer>
            {answer.question.hashTags.map( hashTag => 
                <HashTag key={hashTag.id} href={`/hash-tags/${hashTag.id}`}>
                    {hashTag.name}
                </HashTag>
            )}
        </HashTagsContainer>

        <DateContainer>
            <Date>
                {formatedDate(answer.createdAt,formatT.dashed)}
            </Date>
        </DateContainer>
</QuestionContainer>
}