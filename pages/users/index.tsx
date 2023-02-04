import { GetServerSideProps } from 'next';
import React from 'react'
import axios from '../../axios';
import { Users } from '../../containers/Users'
import { urlSearchParams } from '../../helpers/urlSearchParams';
import { GetAllUsersPaginateT } from '../../types/getAllUsersPaginate';

export const getServerSideProps:GetServerSideProps = async (context) =>  {
  const {page,orderFieldName,orderValue,search} = context.query;
  const dto = {
    page,
    pageSize:36,
    fieldName:orderFieldName,
    orderValue,
    search:search || ''
  }
  const params = urlSearchParams(dto);

  const res = await axios.get<GetAllUsersPaginateT>(`/users/getAllPaginated/${params}`);
  const data = res.data;
  return { props: { data } }
}

export default function index(data:GetAllUsersPaginateT) {
  return <Users paginatedUsers={data}/>
}
