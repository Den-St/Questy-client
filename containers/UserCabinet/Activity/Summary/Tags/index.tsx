import { HashTagsComponent } from "../../../../../components/UserCabinet/Activity/Summary/HashTags"
import { useSummaryHashTags } from "../../../../../hooks/summaryHashTags"
import { UserT } from "../../../../../types/user"

type Props = {
    user:UserT,
    isMe:boolean
}

export const Tags:React.FC<Props> = ({user,isMe}) => {
    const {hashTags,loading,onChangeOrderRule,orderRule} = useSummaryHashTags(user.id);
    return <HashTagsComponent orderRule={orderRule} onChangeOrderRule={onChangeOrderRule} loading={loading} isMe={isMe} user={user} hashTags={hashTags}/>
}