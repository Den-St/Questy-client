import { UserCabinetComponent } from "../../components/UserCabinet/index"
import { useAppSelector } from "../../hooks/redux"
import { UserT } from "../../types/user"

type Props = {
    user:UserT
}

export const UserCabinet:React.FC<Props> = ({user}) => {
    const myId = useAppSelector(state => state.userReducer.user?.id);
    const isMe = myId === user.id;
    return <UserCabinetComponent user={user} isMe={isMe}/>
}