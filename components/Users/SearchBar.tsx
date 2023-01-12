import {SearchOutlined} from "@ant-design/icons";
import { DebouncedFunc } from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { SearchParamT } from "../../types/searchParamT";
import { SearchBarContainer, SearchButton, SearchInput } from "./styles";

export type Props = {
    value:SearchParamT,
    onConfirmSearch:(value?:string) => void,
}

export const SearchBar:React.FC<Props> = ({value,onConfirmSearch}) => {
    const router = useRouter();
    const {search} = router.query;
    const [searchBarText,setSearchBarText] = useState<string | undefined>(value as string);
    const onKeyPress = (e?:React.KeyboardEvent<HTMLDivElement>) => {
        if(disabled) return;
        if(e?.code === 'Enter' || e?.keyCode === 13) onConfirmSearch(searchBarText)
    }
    const onChangeSearchText = (e?:React.ChangeEvent<HTMLInputElement>) => {
        setSearchBarText(e?.target.value);
        if(!e?.target.value) onConfirmSearch('');
    }
    const disabled = searchBarText === search;
    return <SearchBarContainer>
        <SearchInput onKeyDown={onKeyPress} value={searchBarText} onChange={onChangeSearchText}/>
        <SearchButton $disabled={disabled} disabled={disabled} onClick={() => onConfirmSearch(searchBarText)}>
            <SearchOutlined/>
        </SearchButton>
    </SearchBarContainer>
}