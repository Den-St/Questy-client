import { useRouter } from 'next/router'
import React from 'react'
import Header from '../Header'
import SideBar from '../SideBar'
import { Center, Container } from './styles'

type Props = {
  children:React.ReactNode
}

export default function Layout({children}:Props) {
  const excludeSide = ['/registration','/users/[id]'];
  const excludeHead = ['/registration'];
  const route = useRouter().pathname;
  console.log('route ',route)
  return <Container>
    {!excludeHead.includes(route) && <Header/>}
    <Center $withSideBar={!excludeHead.includes(route)}>
    {!excludeSide.includes(route) && <SideBar/>}
      {children}
    </Center>
  </Container>
}