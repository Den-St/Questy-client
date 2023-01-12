import { Pagination, Select, Spin } from "antd"
import { QuestionT } from "../../../../types/question"
import { Divider } from "../Summary/Answers/styles"
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Container, Header } from "../Answers/styles"
import { LinkTo } from "../Summary/Questions/styles"
import { links } from "../../../../constants/routes"
import { HashTagItem } from "./HashTag";
import { HashTagT } from "../../../../types/hash-tag";
import { NoQuestions, PaginationContainer, QuestionsContainer } from "../Questions/styles";

type Props = {
    page?:number,
    hashTags:HashTagT[],
    total:number,
    onChangePage:(pageNumber:number) => void,
    loading:boolean,
    onChangeOrderRule:(value:string) => void,
    orderRule:string,
    isMe:boolean
}

export const HashTagsComponent:React.FC<Props> = ({orderRule,onChangeOrderRule,onChangePage,page,loading,hashTags,total,isMe}) => {
    console.log("v",hashTags)
    return <Container>
        <Header>
        Created hash-tags
        
        {!loading && !!hashTags.length &&
            <Select className={'select'} value={orderRule} defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"DESC"})} onChange={onChangeOrderRule}
                options={[
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"DESC"}),
                        label:'by Newest'
                    },
                    {
                        value:JSON.stringify({fieldName:"createdAt",orderValue:"ASC"}),
                        label:'by Oldest'
                    },
                    {
                        value:JSON.stringify({fieldName:"questionsNumber",orderValue:"ASC"}),
                        label:'by Questions(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"questionsNumber",orderValue:"DESC"}),
                        label:'by Questions(DESC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"followersNumber",orderValue:"ASC"}),
                        label:'by Followers(ASC)'
                    },
                    {
                        value:JSON.stringify({fieldName:"followersNumber",orderValue:"DESC"}),
                        label:'by Followers(DESC)'
                    }
                ]}
            >
            </Select>
        }
        </Header>
        
        <QuestionsContainer>
            {(!loading && !!hashTags?.length) && hashTags.map(hashTag =>
                <>
                    <HashTagItem key={hashTag.id} hashTag={hashTag}/>
                    <Divider/>
                </>
            )}

            {(!loading && !hashTags?.length) && 
            <>{isMe 
                ? <NoQuestions>You don't have any <LinkTo href={'/create-question'}> created </LinkTo> hash-tags</NoQuestions>
                : <NoQuestions>This user doesn't have any created hash-tags</NoQuestions> }</>}

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