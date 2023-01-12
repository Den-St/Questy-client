import { useRouter } from "next/router";
import { useSearchHashTags } from "../../../hooks/searchHashTags";
import { HashTagsSelect } from "./HashTagsSelect"

type Props = {
    onChange:(value:string[]) => void,
    onFavoriteHashTags:boolean,
    clicked:boolean,
    onRemoveFavoriteHashTags:() => void,
}

export const HashTagsSelectContainer:React.FC<Props> = ({onRemoveFavoriteHashTags,clicked,onFavoriteHashTags,onChange}) => {
    const {debounceRefetch,hashTags} = useSearchHashTags();
    const router = useRouter();
    return <HashTagsSelect onRemoveFavoriteHashTags={onRemoveFavoriteHashTags} clicked={clicked} onFavoriteHashTags={onFavoriteHashTags} pickedHashTags={router.query.hashTags} onChange={onChange} search={debounceRefetch} hashTags={hashTags}/>
}