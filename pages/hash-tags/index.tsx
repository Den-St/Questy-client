import { GetServerSideProps } from 'next';
import React from 'react'
import axios from '../../axios';
import { HashTags } from '../../containers/HashTags';
import { GetPaginatedHashTags } from '../../types/GetPaginatedHashTags';

export const getServerSideProps:GetServerSideProps = async (context) =>  {
    const {page,orderFieldName,orderValue,search} = context.query;
    const dto = {
        page,
        pageSize:36,
        orderRule:{
            fieldName:orderFieldName,
            orderValue,
        },
        search
    }

    const res = await axios.post<GetPaginatedHashTags>(`/hash-tags/getPAginated`,dto);
    const data = res.data;
    return { props: { data:data } }
  }

export default function hashTags(data:GetPaginatedHashTags) {
    return <HashTags paginatedHashTags={data.data}/>
}
