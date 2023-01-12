import { Select } from "antd"
import { DebouncedFunc } from "lodash"
import { useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { HashTagT } from "../../../types/hash-tag"
import { SearchParamT } from "../../../types/searchParamT";
const {Option} = Select;

type Props = {
    search:DebouncedFunc<(value?: string | undefined) => Promise<void>>,
    hashTags:HashTagT[],
    onChange:(value:string[]) => void,
    pickedHashTags:SearchParamT,
    onFavoriteHashTags:boolean,
    clicked:boolean,
    onRemoveFavoriteHashTags:() => void
}

export const HashTagsSelect:React.FC<Props> = ({onRemoveFavoriteHashTags,clicked,onFavoriteHashTags,onChange,search,hashTags,pickedHashTags}) => {
    const favoriteHashTags = useAppSelector(state => state).userReducer.user?.favoriteHashTags;

    useEffect(() => {
        const favoriteHashTagsNames:string[] = [];

        if(!clicked) return;//if user didnt press favorite hash-tags button
        favoriteHashTags?.map(hashTag => favoriteHashTagsNames.push(hashTag.name));//array of names of favorite hash-tags
        let hashTagsNames:string[] = [];//array from names of all picked hash-tags

        if(onFavoriteHashTags) {//if user chose favorite hash-tags
            const set = new Set([...pickedHashTags?.toString().split(';').filter(hashTag => hashTag.length) || [], ...favoriteHashTagsNames]);//create array of unique hash-tags names
            hashTagsNames = Array.from(set);
        }
        else if(pickedHashTags?.length) {
            hashTagsNames = pickedHashTags?.toString().split(';').filter(hashTag => hashTag.length && !favoriteHashTagsNames?.includes(hashTag));//add hash-tags that do not appear in favorite hash-tags
        }

        onChange(hashTagsNames)
    },[onFavoriteHashTags]);
    
    useEffect(() => {
        const favoriteHashTagsNames:string[] = [];
        favoriteHashTags?.map(hashTag => favoriteHashTagsNames.push(hashTag.name));//array of names of favorite hash-tags

        const haveFavoriteHashTags = !!pickedHashTags?.toString().split(';').filter(hashTag => hashTag.length && favoriteHashTagsNames?.includes(hashTag)).length;
        !haveFavoriteHashTags && onRemoveFavoriteHashTags();
    },[pickedHashTags])

    return <Select
            className="hashTagsSelect"
            mode="multiple"
            optionLabelProp="label"
            onSearch={search}
            onChange={onChange}
            value={pickedHashTags?.toString().split(';').filter(hashTag => hashTag.length)}
        >
        {hashTags && hashTags.map(hashTag => 
            <Option key={hashTag.id} value={hashTag.name} label={hashTag.name}>
            </Option>
        )}
        </Select>
}