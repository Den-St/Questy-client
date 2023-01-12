import { GetServerSideProps } from 'next';
import React from 'react'
import axios from '../../axios';
import { Questions } from '../../containers/Questions';
import { GetPagintatedQuestions } from '../../types/getPaginatedQuestions';

export const getServerSideProps:GetServerSideProps = async (context) =>  {
    const {page,orderFieldName,orderValue,search,hashTags,onlyAnswered} = context.query;
    const dto = {
        hashTags:decodeURI(hashTags?.toString() || ''),
        page,
        pageSize:15,
        orderRule:{
            fieldName:orderFieldName,
            orderValue,
        },
        search,
        onlyAnswered: onlyAnswered === 'true'
    }
  
    const res = await axios.post<GetPagintatedQuestions>(`/questions/getPaginatedQuestions`,dto);
    const data = res.data;
    return { props: { data:data } }
  }

  
export default function index(data:GetPagintatedQuestions) {
    
    return <Questions paginatedQuestions={data.data}/>
}
