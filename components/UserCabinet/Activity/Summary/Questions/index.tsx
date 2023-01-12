import { Select } from "antd"
import { routes } from "../../../../../helpers/route"
import { QuestionT } from "../../../../../types/question"
import { UserT } from "../../../../../types/user"
import { Item, ItemHeader, Left, Name, ViewAll } from "../styles"
import { QuestionItem } from "./Question"
import { Container, Divider, LinkTo, NoQuestions } from "./styles"

type Props = {
    questions:QuestionT[],
    loading:boolean,
    onChangeOrderRule:(value:string) => void,
    user:UserT,
    orderRule:string,
    isMe:boolean
}

export const QuestionsComponent:React.FC<Props> = ({orderRule,onChangeOrderRule,questions,loading,user,isMe}) => {
    return <Item>
        <ItemHeader>
            <Left>
                <Name>Questions</Name>
                <ViewAll href={routes.users.get({id:user.id.toString()}) + '?dir=activity&subdir=questions'}>view all {user.numberOfQuestions}</ViewAll>
            </Left>
            {(!loading && !!questions.length) &&
            <Select className={'select'} value={orderRule} defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"ASC"})} onChange={onChangeOrderRule}
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
        </ItemHeader>
        <Container>
        {(!loading && !!questions.length) && questions.map(question => <>
                                            <QuestionItem question={question}/>
                                            <Divider/>
                                        </>) 
        }

        {(!loading && !questions.length) &&
        <>{isMe 
            ? <NoQuestions>You have not <LinkTo href={'/create-question'}>asked</LinkTo> questions </NoQuestions>
            : <NoQuestions> This user has no asked questions</NoQuestions>}</>}


        </Container>
    </Item>
}