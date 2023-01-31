import { CommunitiesComponent } from "../../components/Communities"
import { usePaginatedCommunities } from "../../hooks/usePaginatedCommunities"
import { CommunityT } from "../../types/community"

type Props = {
    paginatedCommunities:{communities:CommunityT[],total:number}
}

export const Communities:React.FC<Props> = ({paginatedCommunities}) => {
    const {onChangeHashTags,onChangeOrder,onChangePage,onConfirmSearch} = usePaginatedCommunities();
    return <CommunitiesComponent onChangeHashTags={onChangeHashTags} onChangeOrder={onChangeOrder}
      paginatedCommunities={paginatedCommunities} onChangePage={onChangePage} onConfirmSearch={onConfirmSearch}/>
}