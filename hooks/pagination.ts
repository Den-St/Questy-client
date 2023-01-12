import { useRouter } from "next/router";
import _debounce from 'lodash/debounce';

export const useGetPagination = () => {
    const router = useRouter();
    const onChangePage = (page:number) => {
        router.push({query:{...router.query,page}});
    }

    const onChangeOrder = (value:string) => {
        const {orderFieldName,orderValue} = JSON.parse(value);
        router.push({query:{...router.query,orderFieldName,orderValue}});
    }

    const onConfirmSearch = (value?:string) => {
        router.push({query:{...router.query,search:value || ""}});
    }

    return {onChangeOrder,onChangePage,onConfirmSearch,};
}