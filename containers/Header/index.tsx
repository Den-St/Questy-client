import React from 'react'
import {HeaderComponent} from '../../components/Header'
import { useAppSelector } from '../../hooks/redux'

export default function Header() {
  const user = useAppSelector(state => state.userReducer.user);
  return <HeaderComponent user={user}/>
}
