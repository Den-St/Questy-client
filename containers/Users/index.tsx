import { UsersComponent } from "../../components/Users"
import { useGetPagination } from "../../hooks/pagination";
import { GetAllUsersPaginateT } from "../../types/getAllUsersPaginate";

type Props = {
    paginatedUsers:GetAllUsersPaginateT
}

export const Users:React.FC<Props> = ({paginatedUsers}) => {
    const {onChangeOrder,onChangePage,onConfirmSearch} = useGetPagination();
    
    return <UsersComponent onChangeOrder={onChangeOrder} onConfirmSearch={onConfirmSearch}
        onChangePage={onChangePage} total={paginatedUsers.data.total} paginatedUsers={paginatedUsers} />
}


  
