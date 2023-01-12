import { Select, Spin } from "antd"
import { AnswerT } from "../../../../../types/answer"
import { AnswerItem } from "./Answer"
import { Container, Divider,NoAnswers } from "./styles"
import {Loading3QuartersOutlined} from "@ant-design/icons"
import { Item, ItemHeader, Left, Name, ViewAll } from "../styles"
import { UserT } from "../../../../../types/user"
import { routes } from "../../../../../helpers/route"
import { LinkTo } from "../Questions/styles"

type Props = {
    answers:AnswerT[],
    loading:boolean,
    onChangeOrderRule:(value:string) => void,
    user:UserT,
    orderRule:string,
    isMe:boolean
}

export const AnswersComponent:React.FC<Props> = ({orderRule,user,answers,loading,onChangeOrderRule,isMe}) => {
    return <Item>

        <ItemHeader>
            <Left>
                <Name>Answers</Name>
                <ViewAll href={routes.users.get({id:user.id.toString()}) + '?dir=activity&subdir=answers'}>view all {user.numberOfAnswers}</ViewAll>
            </Left>
            
            {(!loading && !!answers.length) &&<Select className="select" defaultValue={JSON.stringify({fieldName:"createdAt",orderValue:"ASC"})} value={orderRule} onChange={onChangeOrderRule}
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
            </Select>}
        </ItemHeader>
        <Container>
            {(!loading && !!answers.length) && answers.map(answer => <>
                                                <AnswerItem key={answer.id} answer={answer}/>
                                                <Divider/>
                                            </>) 
            }
            
            {(!loading && !answers.length) && 
            <>{isMe 
                ? <NoAnswers>You have not <LinkTo href={'/questions'}>answered</LinkTo> any questions</NoAnswers> 
                : <NoAnswers>This user has not answered any questions</NoAnswers>}</>}
            
            
            {loading && <Spin indicator={<Loading3QuartersOutlined/>}/>}
        </Container>
    </Item>

}