import { SvgIcon } from "../../../../assets/svg/SvgIcon"
import { AnswersContainer, Date, DateContainer, HashTag, HashTagsContainer, QuestionContainer, RatingContainer, RatingNumber, StatsContainer, Title, ViewsContainer, ViewsNumber } from "./styles"
import {CheckOutlined} from '@ant-design/icons'
import { QuestionT } from "../../../../types/question"
import { formatedDate, formatT } from "../../../../helpers/formatedDate"

type Props = {
    question:QuestionT
}

export const QuestionItem:React.FC<Props> = ({question}) => {
    return <QuestionContainer>
        <StatsContainer>

            <RatingContainer>
                <RatingNumber>
                    {question.rating}
                </RatingNumber>
                    votes
            </RatingContainer>

            <AnswersContainer $haveCorrectAnswer={question.haveCorrectAnswer}>
                 {question.answersNumber} answers
            </AnswersContainer>    

            <ViewsContainer>
                <ViewsNumber>
                    {question.views}
                </ViewsNumber>
                    views
            </ViewsContainer>

        </StatsContainer>

        <Title href={''}>
            {question.title}
        </Title>

        <HashTagsContainer>
            {question && question.hashTags.map(hashTag => 
                <HashTag key={hashTag.id} href={''}>
                    {hashTag.name}
                </HashTag>
            )}
        </HashTagsContainer>

        <DateContainer>
            <Date>
                {formatedDate(question.createdAt,formatT.dashed)}
            </Date>
        </DateContainer>
    </QuestionContainer>
}