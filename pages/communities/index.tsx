import { GetServerSideProps } from "next";
import axios from "../../axios";
import { Communities } from "../../containers/Communities";
import { GetPaginatedCommunities } from "../../types/GetPaginatedCommunities";

export const getServerSideProps:GetServerSideProps = async (context) =>  {
    const {page,orderFieldName,orderValue,search,hashTags} = context.query;
    const dto = {
        hashTags:decodeURI(hashTags?.toString() || ''),
        page,
        pageSize:10,
        orderRule:{
            fieldName:orderFieldName,
            orderValue,
        },
        search
    }

    const res = await axios.get<GetPaginatedCommunities>(`/community/getPaginated`,{params:dto});
    const data = res.data;
    return { props: { data:data } }
  }

export default function communities(data:GetPaginatedCommunities) {
    return <Communities paginatedCommunities={data.data}/>
}
