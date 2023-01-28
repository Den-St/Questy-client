import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SvgIcon } from '../../assets/svg/SvgIcon'
import { sideBarRoutes } from '../../constants/routes'
import { Container, Divider, Route, RouteContainer, RouterName } from './styles'

export default function SideBarComponent() {
  const pathname = useRouter().pathname;
  
  return <Container>
    {sideBarRoutes.map(route => 
        <RouteContainer  key={route.link.base}>
        <Route $chosen={pathname === route.link.base} href={route.link.full}>
            <SvgIcon type={route.svgName || ''}/>
            <RouterName>{route.label}</RouterName>
        </Route>
        <Divider/>
        </RouteContainer>)
    }
  </Container>
}
