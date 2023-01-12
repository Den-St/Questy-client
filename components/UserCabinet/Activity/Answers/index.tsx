import { Pagination, Select, Spin } from "antd"
import { AnswerT } from "../../../../types/answer"
import { NoQuestions, PaginationContainer } from "../Questions/styles"
import { Divider } from "../Summary/Answers/styles"
import { AnswerItem } from "./AnswerItem"
import { AnswersContainer, Container, Header } from "./styles"
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { LinkTo } from "../Summary/Questions/styles"
import { links } from "../../../../constants/routes"

type Props = {
    page?:number,
    answers:AnswerT[],
    total:number,
    onChangePage:(pageNumber:number) => void,
    loading:boolean,
    onChangeOrderRule:(value:string) => void,
    orderRule:string,
    isMe:boolean
}



export const AnswersComponent:React.FC<Props> = ({orderRule,onChangeOrderRule,loading,page,answers,total,onChangePage,isMe}) => {
    return <Container>
        <Header>
            Answers
            {!loading && !!answers.length &&  <Select className="select" value={orderRule} defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"ASC"})} onChange={onChangeOrderRule}
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
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"ASC"}),
                        label:'by Newest'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"DESC"}),
                        label:'by Oldest'
                    },
                ]}
            >
            </Select>
            }
        </Header>
        <AnswersContainer>
            {(!loading && !!answers.length) && answers.map(answer =>
                <>
                    <AnswerItem key={answer.id} answer={answer}/>
                    <Divider/>
                </>
                )}
                
            {(!loading && !answers.length) &&
                <>{isMe 
                ? <NoQuestions>You have not <LinkTo href={links.questions}>answered</LinkTo> any questions.</NoQuestions> 
                :<NoQuestions>This user has not answered any questions.</NoQuestions>}</> }

            {loading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
        </AnswersContainer>

        {!loading && (total > 10) && <PaginationContainer><Pagination
            total={total}
            onChange={onChangePage}
            defaultCurrent={page}
            showSizeChanger={false}
            showTotal={(total) => `Total ${total} answers`}
        /></PaginationContainer>}
    </Container>
}