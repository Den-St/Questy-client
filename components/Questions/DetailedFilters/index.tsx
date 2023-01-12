import { Switch } from "antd";
import { useState } from "react";
import { HashTagsSelectContainer } from "../HashTagsSelect/Container"
import { DetailedFiltersContainer, Filter, FilterHeader } from "../styles"

type Props = {
    onChangeHashTags:(value:string[]) => void;
    onChangeOnlyAnswered:() => void
}

export const DetailedFilters:React.FC<Props> = ({onChangeOnlyAnswered,onChangeHashTags}) => {
    const [onFavoriteHashTags,setOnFavoriteHashTags] = useState(false);
    const [clicked,setClicked] = useState(false);
    const onChangeFavorite = () => {
        setOnFavoriteHashTags(prev => !prev);
        setClicked(true);
    }
    const onRemoveFavoriteHashTags = () => {
        setOnFavoriteHashTags(false);
    }
    return <DetailedFiltersContainer>
        <Filter>
            <FilterHeader>Tagged with</FilterHeader>
            <div>Favorite hash-tags: <Switch checked={onFavoriteHashTags} defaultChecked={false} onChange={onChangeFavorite}/></div>
            <HashTagsSelectContainer onRemoveFavoriteHashTags={onRemoveFavoriteHashTags} clicked={clicked} onFavoriteHashTags={onFavoriteHashTags} onChange={onChangeHashTags}/>
        </Filter>
        <Filter>
            <FilterHeader>Only answered: <Switch defaultChecked={false} onChange={onChangeOnlyAnswered}/></FilterHeader>
        </Filter>
    </DetailedFiltersContainer>
}