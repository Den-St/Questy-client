import { Pagination, Select, Spin } from "antd"
import { QuestionT } from "../../../../types/question"
import { Divider } from "../Summary/Answers/styles"
import { QuestionItem } from "./QuestionItem"
import { Container, NoQuestions, PaginationContainer, QuestionsContainer } from "./styles"
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Header } from "../Answers/styles"
import { LinkTo } from "../Summary/Questions/styles"
import { links } from "../../../../constants/routes"

type Props = {
    page?:number,
    questions:QuestionT[],
    total:number,
    onChangePage:(pageNumber:number) => void,
    loading:boolean,
    onChangeOrderRule:(value:string) => void,
    orderRule:string,
    isMe:boolean
}

export const QuestionsComponent:React.FC<Props> = ({orderRule,onChangeOrderRule,onChangePage,page,loading,questions,total,isMe}) => {
    return <Container>
        <Header>
        Questions
        
        {!loading && !!questions.length &&
            <Select className={'select'} value={orderRule} defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"DESC"})} onChange={onChangeOrderRule}
                options={[
                    {
                        value:JSON.stringify({fieldName:"rating",orderValue:"ASC"}),
                        label:'by Rating(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"rating",orderValue:"DESC"}),
                        label:'by Rating(DESC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"DESC"}),
                        label:'by Newest'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"ASC"}),
                        label:'by Oldest'
                    },
                    {
                        value:JSON.stringify({fieldName:"views",orderValue:"ASC"}),
                        label:'by Views(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"views",orderValue:"DESC"}),
                        label:'by Views(DESC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"answersNumber",orderValue:"ASC"}),
                        label:'by Number of answers(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"answersNumber",orderValue:"DESC"}),
                        label:'by Number of answers(DESC)'
                    }
                ]}
            >
            </Select>
        }
        </Header>
        
        <QuestionsContainer>
            {(!loading && !!questions.length) && questions.map(question =>
                <>
                    <QuestionItem key={question.id} question={question}/>
                    <Divider/>
                </>
                )}

            {(!loading && !questions.length) && 
            <>{isMe 
                ? <NoQuestions>You don't have any <LinkTo href={links.createQuestion}>asked</LinkTo> questions.</NoQuestions>
                : <NoQuestions>This user don't have any asked questions.</NoQuestions> }</>}

            {loading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
        </QuestionsContainer>

        {!loading && (total > 10) && <PaginationContainer>
            <Pagination
            total={total}
            onChange={onChangePage}
            defaultCurrent={page}
            showSizeChanger={false}
            showTotal={(total) => `Total ${total} questions`}
            />
        </PaginationContainer>}
    </Container>
}