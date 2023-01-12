import { HashTagsComponent } from "../../../../components/UserCabinet/Activity/HashTags"
import { useUsersPaginatedHashTags } from "../../../../hooks/usersPaginatedHashTags";
import { UserT } from "../../../../types/user";

type Props = {
    user:UserT,
    isMe:boolean
}

export const HashTags:React.FC<Props> = ({user,isMe}) => {
    const {page,total,hashTags,onChangePage,loading,onChangeOrderRule,orderRule} = useUsersPaginatedHashTags(user.id);
    return <HashTagsComponent 
        page={page} total={total} hashTags={hashTags} 
        onChangeOrderRule={onChangeOrderRule} onChangePage={onChangePage}
        loading={loading} orderRule={orderRule} isMe={isMe}/>
}