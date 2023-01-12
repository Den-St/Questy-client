import { SearchParamT } from "../types/searchParamT"

export const onChangeSearchParams = (prefix:string,page:SearchParamT,orderFieldName:SearchParamT,orderValue:SearchParamT,search:SearchParamT) => {
    return `/${prefix}?page=${page}&orderFieldName=${orderFieldName}&orderValue=${orderValue}&search=${search}`
}

export const onChangeQuestionSearchParams = (prefix:string,page:SearchParamT,orderFieldName:SearchParamT,orderValue:SearchParamT,search:SearchParamT,hashTags:SearchParamT,onlyAnswered:boolean) => {
    return `/${prefix}?page=${page}&orderFieldName=${orderFieldName}&orderValue=${orderValue}&onlyAnswered=${onlyAnswered}&search=${encodeURIComponent(search?.toString() || '')}&hashTags=${encodeURIComponent(hashTags?.toString() || '')}`;
}

