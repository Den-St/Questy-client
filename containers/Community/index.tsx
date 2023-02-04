import { CommunityComponent } from "../../components/Community"
import { useCommunity } from "../../hooks/community";
import { CommunityT } from "../../types/community"

type Props = {
    community:CommunityT;
}

export const Community:React.FC<Props> = ({community}) => {
    const {joinLoading,onJoinToggle,isJoined,membersLoading,members} = useCommunity(community);

    return <CommunityComponent joinLoading={joinLoading} membersLoading={membersLoading}
    members={members} community={community} onJoinToggle={onJoinToggle} isJoined={isJoined}/>
}