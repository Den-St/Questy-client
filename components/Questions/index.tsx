import { Pagination, Select, Switch } from "antd"
import { useRouter } from "next/router"
import { useState } from "react"
import { QuestionT } from "../../types/question"
import { Container, Header, PaginationContainer } from "../HashTags/styles"
import { Title } from "../UserCabinet/Activity/Questions/styles"
import { Divider } from "../UserCabinet/Activity/Summary/Answers/styles"
import { SearchBar } from "../Users/SearchBar"
import { DetailedFiltersButton, Filters } from "../Users/styles"
import { DetailedFilters } from "./DetailedFilters"
import { HashTagsSelectContainer } from "./HashTagsSelect/Container"
import { AnswersStatItem, PickedHashTags, QuestionContainer, QuestionsContainer, StatItem, StatName, StatsContainer, StatValue } from "./styles"

type Props = {
    questions:QuestionT[],
    total:number,
    onChangeOrder:(value:string) => void;
    onChangePage:(page:number) => void;
    onConfirmSearch:(value?:string) => void,
    onChangeHashTags:(value:string[]) => void
    onChangeOnlyAnswered:() => void
}

export const QuestionsComponent:React.FC<Props> = ({onChangeOnlyAnswered,onChangeHashTags,onChangePage,onChangeOrder,onConfirmSearch,questions,total,}) => {
    const router = useRouter();
    const {page,orderFieldName,orderValue,search,hashTags,onlyAnswered} = router.query;
    const [onDetailedFilters,setOnDetailedFilters] = useState(false);
    const options:{value:string,label:string}[] = [
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'DESC'}),
            label:'Newest'
        },
        {
            value:JSON.stringify({orderFieldName:'createdAt',orderValue:'ASC'}),
            label:'Oldest'
        },
        {
            value:JSON.stringify({orderFieldName:'answersNumber',orderValue:'ASC'}),
            label:'Number of answers(ASC)'
        },
        {
            value:JSON.stringify({orderFieldName:'answersNumber',orderValue:'DESC'}),
            label:'Number of answers(DESC)'
        },
        {
            value:JSON.stringify({orderFieldName:'rating',orderValue:'ASC'}),
            label:'Rating(ASC)'
        },
        {
            value:JSON.stringify({orderFieldName:'rating',orderValue:'DESC'}),
            label:'Rating(DESC)'
        },
    ];

    return <Container>
        <Header>Questions</Header>
        {hashTags?.length 
            ? <PickedHashTags>Picked hash-tags: {hashTags}</PickedHashTags>
            : <PickedHashTags>No picked hash-tags</PickedHashTags>
        }
        <Filters>
            <SearchBar value={search} onConfirmSearch={onConfirmSearch}/>
            <div>
                <Select
                    options={options}
                    onChange={onChangeOrder}
                    value={JSON.stringify({orderFieldName,orderValue})}
                >
                </Select>
                <DetailedFiltersButton onClick={() => setOnDetailedFilters(prev => !prev)} $isActive={onDetailedFilters}>
                    Filters
                </DetailedFiltersButton>
            </div>
        </Filters>
        {onDetailedFilters && <DetailedFilters onChangeOnlyAnswered={onChangeOnlyAnswered} onChangeHashTags={onChangeHashTags}/>}
        <Divider/>
        <QuestionsContainer>
            {!!questions?.length && questions.map(question => 
                <>
                <QuestionContainer key={question.id}>
                    <StatsContainer>
                        <StatItem>
                            <StatValue>
                                {question.rating}
                            </StatValue>
                            <StatName>
                                vote
                            </StatName>
                        </StatItem>
                        <AnswersStatItem $haveCorrect={question.haveCorrectAnswer}>
                            <StatValue>
                                {question.answersNumber}
                            </StatValue>
                            <StatName>
                                answers
                            </StatName>
                        </AnswersStatItem>
                        <StatItem>
                            <StatValue>
                                {question.views}
                            </StatValue>
                            <StatName>
                                views
                            </StatName>
                        </StatItem>
                    </StatsContainer>
                    <Title href={`/questions/${question.id}`}>{question.title}</Title>
                </QuestionContainer>
                <Divider key={question.createdAt}/>    
                </>
            )}
        </QuestionsContainer>
        <PaginationContainer><Pagination total={total} pageSize={15} current={Number(page)} onChange={onChangePage} /></PaginationContainer>
    </Container>
}