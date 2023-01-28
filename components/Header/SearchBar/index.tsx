import { Spin } from 'antd'
import { DebouncedFunc } from 'lodash'
import React, { useState } from 'react'
import { SvgIcon } from '../../../assets/svg/SvgIcon'
import { HashTagT } from '../../../types/hash-tag'
import { QuestionT } from '../../../types/question'
import { UserT } from '../../../types/user'
import { Container, DataContainer, DataDir,UserText, DataItemContainer, HashTagContainer, HashTagDescription, HashTagName, HashTagsContainer, Magnifier, AnswersNumber, QuestionContainer, QuestionNumber, QuestionRating, QuestionsContainer, QuestionTitle, SearchInput, UserAvatar, UserContainer, UserLocation, UserName, UsersContainer, Overlay, NoItems } from './styles'
import {Loading3QuartersOutlined} from '@ant-design/icons';
import { hashTagUrl, routes } from '../../../helpers/route'

type Props = {
  data:{questions:QuestionT[],hashTags:HashTagT[],users:UserT[]};
  loading:boolean;
  search:DebouncedFunc<(value?: string | undefined) => Promise<void>>,
}

export const SearchBarComponent:React.FC<Props> = ({loading,data,search}) => {
  const [onFocus,setOnFocus] = useState(false);
  const [inputData,setInputData] = useState('');
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
    search(e.target.value);
  }
  
  return <Container>
    <Magnifier onClick={() => setOnFocus(prev => !prev)}>
        <SvgIcon type={'magnifier'}/>
    </Magnifier>
    <SearchInput $focused={onFocus} onFocus={() => setOnFocus(true)} value={inputData} onChange={onChange} placeholder={'Search...'}/>
    {inputData && onFocus && <>
    <Overlay onClick={() => setOnFocus(false)}/>
    <DataContainer>
      {!loading && !data.hashTags.length && !data.questions.length && !data.users.length && <NoItems>No items</NoItems>}
      {loading && <NoItems><Spin indicator={<Loading3QuartersOutlined/>}/></NoItems>}
      {!loading && !!data.questions.length 
        && <DataItemContainer>
          <DataDir>Questions</DataDir>
          <QuestionsContainer>
            {data.questions?.map(question => 
              <QuestionContainer key={question.id} href={`/questions/${question.id}`}>
                <QuestionRating rating={question.rating}>{question.rating}</QuestionRating>
                <QuestionTitle>{question.title}</QuestionTitle>
                <AnswersNumber>{question.answersNumber} answers</AnswersNumber>
              </QuestionContainer>)}
          </QuestionsContainer>
        </DataItemContainer>}

        {!loading && !!data.hashTags?.length
          && <DataItemContainer>
            <DataDir>Hash-tags</DataDir>
            <HashTagsContainer>
            {data.hashTags?.map(hashTag => 
              <HashTagContainer key={hashTag.id} href={hashTagUrl(hashTag.name)}>
                <div><HashTagName>{hashTag.name}</HashTagName></div>
                <HashTagDescription>{hashTag.description}</HashTagDescription>
                <QuestionNumber>{hashTag.questionsNumber} questions</QuestionNumber>
              </HashTagContainer>)}
            </HashTagsContainer>
            </DataItemContainer>}

        {!loading && !!data.users.length 
        && <DataItemContainer>
            <DataDir>Users</DataDir>
           <UsersContainer>
            {data.users.map(user => <UserContainer key={user.id} href={routes.users.get({id:user.id.toString()})+'?dir=profile'}>
                  <UserAvatar src={'http://localhost:4000/' + user.avatar?.path}/>
                  <UserText>
                    <UserName>{user.name}</UserName>
                    {!!user.location && <UserLocation>{user.location}</UserLocation>}
                    <AnswersNumber>{user.numberOfAnswers}</AnswersNumber>
                  </UserText>
                </UserContainer>
            )}
          </UsersContainer>
          </DataItemContainer>}
        </DataContainer></>}

  </Container>
}
