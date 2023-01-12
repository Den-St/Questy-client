import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import axios from '../axios';
import { AskQuestionContainer } from '../containers/AskQuestion';
import { useGetTemplates } from '../hooks/getTempaltes';
import { useAppSelector } from '../hooks/redux';
import { GetUsersQuestionTemplates } from '../types/questionTemplate';

export default function AskQuestion() {
  const {templates,templatesLoading,refetch} = useGetTemplates();
  return <AskQuestionContainer templatesLoading={templatesLoading} refetch={refetch} templates={templates}/>
}
