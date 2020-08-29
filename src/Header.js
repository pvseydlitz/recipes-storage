import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return <Wrapper>Philipps Rezepte</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px black solid;
  font-size: 20px;
`
