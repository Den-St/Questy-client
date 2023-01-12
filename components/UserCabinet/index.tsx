import { useRouter } from "next/router"
import { UserT } from "../../types/user"
import { Header } from "./Header"
import { Container, DirectoriesContainer, Directory } from "./styles"
import {cabinetRoutes} from "../../constants/routes";
import { routes } from "../../helpers/route";
import { ProfileDir } from "./ProfileDir";
import { EditDir } from "./Edit";
import { useEffect } from "react";
import { Activity } from "../../containers/UserCabinet/Activity";
type Props = {
    user:UserT,
    isMe:boolean
}

export const UserCabinetComponent:React.FC<Props> = ({user,isMe}) => {
    const router = useRouter()
    const {dir} = router.query;
    useEffect(() => {
        if(!isMe && dir === 'edit') router.push(`/users/${user.id}`)
    },[dir])

    return <Container>
            <Header dir={dir as string} isMe={isMe} user={user}/>
            <DirectoriesContainer>
                {cabinetRoutes.map(route => <Directory key={route.link.base} href={routes.users.get({id:user.id.toString()})+route.link.base} $isActive={dir === route?.name}>{route.label}</Directory>)}
            </DirectoriesContainer>

            {dir === 'profile' && <ProfileDir isMe={isMe} user={user}/>}
            {dir === 'edit' && <EditDir user={user}/>}
            {dir === 'activity' && <Activity isMe={isMe} user={user}/>}
        </Container>
}