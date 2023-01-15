import {SearchBarComponent} from "../../components/Header/SearchBar"
import { useGlobalSearch } from "../../hooks/globalSearch"

export const SearchBar = () => {
    const {data,loading,debounceRefetch} = useGlobalSearch();
    return <SearchBarComponent data={data} loading={loading} search={debounceRefetch}/>
}