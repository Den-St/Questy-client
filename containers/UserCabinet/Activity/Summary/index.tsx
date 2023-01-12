import { SummaryComponent } from "../../../../components/UserCabinet/Activity/Summary"
import { UserT } from "../../../../types/user"


type Props = {
    user:UserT,
    isMe:boolean
}
export const Summary:React.FC<Props> = ({user,isMe}) => {
    return <SummaryComponent isMe={isMe} user={user}/>
}