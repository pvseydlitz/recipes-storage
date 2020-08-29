import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

import homeIcon from './icons/home.svg'
import addIcon from './icons/add.svg'

export default function Footer() {
  return (
    <Wrapper>
      <NavLink to="/">
        <Icon src={homeIcon} alt=""></Icon>
      </NavLink>
      <NavLink to="/upload">
        <Icon src={addIcon} alt=""></Icon>
      </NavLink>
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
