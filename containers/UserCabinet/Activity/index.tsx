import { ActivityComponent } from "../../../components/UserCabinet/Activity"
import { UserT } from "../../../types/user"

type Props = {
    user:UserT,
    isMe:boolean
}

export const Activity:React.FC<Props> = ({user,isMe}) => {
    return <ActivityComponent isMe={isMe} user={user}/>
}