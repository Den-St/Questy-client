import { useRouter } from "next/router";

export const useQuestionsPagination = () => {
    const router = useRouter();
    const {page,orderFieldName,orderValue,search,hashTags,onlyAnswered} = router.query;
    const onChangePage = (page:number) => {
        router.push({query:{page,orderFieldName,orderValue,search:search || '',hashTags:hashTags || '',onlyAnswered}})
    }

    const onChangeOrder = (value:string) => {
        const {orderFieldName,orderValue} = JSON.parse(value);
        router.push({query:{...router.query,orderFieldName,orderValue}});
    }

    const onChangeOnlyAnswered = () => {
        router.push({query:{page,orderFieldName,orderValue,search:search || '',hashTags:hashTags || '',onlyAnswered:onlyAnswered !== 'true'}})
    }

    const onChangeHashTags = (value:string[]) => {
        let hashTagsString = '';
        value.map(hashTag => hashTagsString += hashTag+';')
        router.push({query:{page,orderFieldName,orderValue,search:search || '',hashTags:hashTagsString,onlyAnswered}})
    }

    const onConfirmSearch = (value?:string) => {
        router.push({query:{page,orderFieldName,orderValue,search:value || '',hashTags,onlyAnswered}})
    }

    return {onChangeOrder,onChangePage,onConfirmSearch,onChangeHashTags,onChangeOnlyAnswered};
}