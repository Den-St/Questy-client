import { HashTagsComponent } from "../../components/HashTags"
import { useGetPagination } from "../../hooks/pagination"
import { HashTagT } from "../../types/hash-tag"

type Props = {
    paginatedHashTags:{
        hashTags:HashTagT[],
        total:number
    }
}

export const HashTags:React.FC<Props> = ({paginatedHashTags}) => {
    const {onChangeOrder,onChangePage,onConfirmSearch} = useGetPagination();

    return <HashTagsComponent onConfirmSearch={onConfirmSearch} onChangeOrder={onChangeOrder}
        onChangePage={onChangePage} paginatedHashTags={paginatedHashTags}/>
}