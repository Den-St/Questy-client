import { GetServerSideProps } from 'next';
import React from 'react'
import axios from '../../axios';
import { QuestionContainer } from '../../containers/Question';
import { QuestionT } from '../../types/question';

export const getServerSideProps:GetServerSideProps = async (context) =>  {
    const {id} = context.query;
    const res = await axios.get<QuestionT>(`/questions/get`,{params:{id}});
    const data = res.data;
    return { props: { data:data } }
  }


export default function Question(data:{data:QuestionT}) {
  return <QuestionContainer question={data.data}/>
}
