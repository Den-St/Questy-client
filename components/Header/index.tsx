import React, { useState } from 'react'
import { UserT } from '../../types/user'
import { AskQuestion, Avatar, Buttons, Container, Divider, Login, Logo, Messages, Registration, SignMenu, User } from './styles'
import {links} from '../../constants/routes';
import { LoginModal } from '../../containers/modal/login.modal';
import { routes } from '../../helpers/route';
import {BellOutlined} from '@ant-design/icons';
import { MessagesModal } from '../../containers/MessagesModal';
import { SearchBar } from '../../containers/Header/SearchBar';

type Props = {
  user:UserT | null
}

export const HeaderComponent:React.FC<Props> = ({user}) => {
  const id = user?.id?.toString();
  const [isOnMessages,setIsOnMessages] = useState(false);

  const onToggleMessages = () => {
    setIsOnMessages(prev => !prev);
  }

  const onClose = () => {
    setIsOnMessages(false);
  }

  return <Container>
    <Logo href={'/'}>Questy</Logo>
    <SearchBar/>
    {!!id 
    ? <Buttons>
        <Messages onClick={onToggleMessages}><BellOutlined/></Messages>
        {isOnMessages && <MessagesModal onClose={onClose}/>}
        <AskQuestion href={'/ask-question'}>Ask question</AskQuestion>
        <User href={routes.users.get({id})+"?dir=profile"}>
          <Avatar src={'http://localhost:4000/' + user?.avatar?.path}/>
        </User>
      </Buttons>
    : <SignMenu>
        <Registration href={links.registration}>Registration</Registration>
        <Divider/>
        <LoginModal button={<Login>Login</Login>}/>
    </SignMenu>}
  </Container>
}
