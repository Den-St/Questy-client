import { Answers } from "../../../../containers/UserCabinet/Activity/Summary/Answers"
import { Questions } from "../../../../containers/UserCabinet/Activity/Summary/Questions"
import { Tags } from "../../../../containers/UserCabinet/Activity/Summary/Tags"
import { UserT } from "../../../../types/user"
import { Container, Item, ItemHeader, Name, ViewAll } from "./styles"

type Props = {
    user:UserT,
    isMe:boolean
}

export const SummaryComponent:React.FC<Props> = ({user,isMe}) => {
    return <Container>
        <Questions isMe={isMe} user={user}/>
        <Answers isMe={isMe}  user={user}/>
        <Tags isMe={isMe} user={user}/>
    </Container>
}