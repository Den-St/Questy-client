import { GetServerSideProps } from "next";
import axios from "../../axios";
import { Community } from "../../containers/Community";
import { CommunityT } from "../../types/community";
import { GetPaginatedCommunities } from "../../types/GetPaginatedCommunities";

export const getServerSideProps:GetServerSideProps = async (context) => {
    const {id} = context.query;

    const res = await axios.get<CommunityT>(`/community/get`,{params:{id}});
    const data = res.data;
    return { props: { data:data } }
  }

export default function communities(data:{data:CommunityT}) {
    return <Community community={data.data}/>
}
