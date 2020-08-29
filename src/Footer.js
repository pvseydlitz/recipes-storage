import React from 'react'
import styled from 'styled-components/macro'

import homeIcon from './icons/home.svg'
import addIcon from './icons/add.svg'

export default function Footer() {
  return (
    <Wrapper>
      <Icon src={homeIcon} alt=""></Icon>
      <Icon src={addIcon} alt=""></Icon>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
  border-top: 2px black solid;
  font-size: 20px;
`

const Icon = styled.img`
  width: 40px;
`
