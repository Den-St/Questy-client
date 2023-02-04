import React from 'react'
import { GetServerSideProps } from 'next';
import axios from '../../axios';
import { UserCabinet } from '../../containers/UserCabinet';
import { GetUser } from '../../types/getUser';

export const getServerSideProps:GetServerSideProps = async (context) =>  {
  const id = context.query.id;

  const res = await axios.get<GetUser>(`/users/getById`,{params:{id}});
  const data = res.data;
  return { props: { data:data } }
}

export default function User(data:GetUser) {
  return <UserCabinet user={data.data}/>
}
