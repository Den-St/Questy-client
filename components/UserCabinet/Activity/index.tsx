import { useRouter } from "next/router"
import { activityDirSubDirs } from "../../../constants/routes"
import { Summary } from "../../../containers/UserCabinet/Activity/Summary"
import { Answers } from "../../../containers/UserCabinet/Activity/Answers"
import { Questions } from "../../../containers/UserCabinet/Activity/Questions"
import { HashTags } from "../../../containers/UserCabinet/Activity/HashTags"
import { routes } from "../../../helpers/route"
import { UserT } from "../../../types/user"
import { Container, LeftSide, LeftSideItem } from "./styles"

type Props = {
    user:UserT,
    isMe:boolean
}

export const ActivityComponent:React.FC<Props> = ({user,isMe}) => {
    const router = useRouter();
    const {subdir} = router.query;
    return <Container>
        <LeftSide>
            {activityDirSubDirs.map(dir => 
                <LeftSideItem key={dir.link.base} $isActive={subdir === dir.name} href={routes.users.get({id:user.id.toString()}) + '?dir=activity' + dir.link.base}>{dir.label}</LeftSideItem>)
            }
        </LeftSide>

        {subdir === 'summary' && <Summary isMe={isMe} user={user}/>}
        {subdir === 'questions' && <Questions isMe={isMe} user={user}/>}
        {subdir === 'answers' && <Answers isMe={isMe} user={user}/>}
        {subdir === 'tags' && <HashTags isMe={isMe} user={user}/>}
    </Container>
}