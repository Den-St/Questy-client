import { HashTagsComponent } from "../../components/HashTags"
import { useFavoriteHashTags } from "../../hooks/favoriteHashTags"
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
    const {favoriteLoading,isFavorite,onToggleFavorite} = useFavoriteHashTags();

    return <HashTagsComponent favoriteLoading={favoriteLoading}
        isFavorite={isFavorite} onToggleFavorite={onToggleFavorite}
        onConfirmSearch={onConfirmSearch} onChangeOrder={onChangeOrder}
        onChangePage={onChangePage} paginatedHashTags={paginatedHashTags}/>
}