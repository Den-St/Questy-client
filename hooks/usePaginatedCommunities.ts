import { useRouter } from "next/router";

export const usePaginatedCommunities = () => {
    const router = useRouter();
    const {page,orderFieldName,orderValue,search,hashTags} = router.query;
    const onChangePage = (page:number) => {
        router.push({query:{page,orderFieldName,orderValue,search:search || '',hashTags:hashTags || '',}})
    }

    const onChangeOrder = (value:string) => {
        const {orderFieldName,orderValue} = JSON.parse(value);
        router.push({query:{...router.query,orderFieldName,orderValue}});
    }

    const onChangeHashTags = (value:string[]) => {
        let hashTagsString = '';
        value.map(hashTag => hashTagsString += hashTag+';')
        router.push({query:{page,orderFieldName,orderValue,search:search || '',hashTags:hashTagsString}})
    }

    const onConfirmSearch = (value?:string) => {
        router.push({query:{page,orderFieldName,orderValue,search:value || '',hashTags,}})
    }

    return {onChangeOrder,onChangePage,onConfirmSearch,onChangeHashTags,};
}