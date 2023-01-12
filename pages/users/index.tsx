import { GetServerSideProps } from 'next';
import React from 'react'
import axios from '../../axios';
import { Users } from '../../containers/Users'
import { GetAllUsersPaginateT } from '../../types/getAllUsersPaginate';

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
  const res = await axios.post<GetAllUsersPaginateT>(`/users/getAllPaginated`,dto);
  const data = res.data;
  return { props: { data } }
}

export default function index(data:GetAllUsersPaginateT) {
  return <Users paginatedUsers={data}/>
}
