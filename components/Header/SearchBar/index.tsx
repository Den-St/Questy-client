import React from 'react'
import { SvgIcon } from '../../../assets/svg/SvgIcon'
import { Container, Magnifier, SearchInput } from './styles'

export default function SearchBarComponent() {
  return <Container>
    <Magnifier>
        <SvgIcon type={'magnifier'}/>
    </Magnifier>
    <SearchInput placeholder={'Search...'}/>
   
  </Container>
}
