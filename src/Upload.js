import React from 'react'
import styled from 'styled-components/macro'

import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import DropdownEinheiten from './DropdownEinheiten'

export default function Upload() {
  return (
    <Grid>
      <Header></Header>
      <Wrapper>
        <Headline>Titel</Headline>
        <Input type="text" name="titel"></Input>
        <Headline>Beschreibung</Headline>
        <Input type="text" name="beschreibung"></Input>
        <Headline>Zutaten</Headline>
        <GridZutaten>
          <Headline>Menge</Headline>
          <Headline>Einheit</Headline>
          <Headline>Produkt</Headline>
          <Input></Input>
          <DropdownEinheiten></DropdownEinheiten>
          <Input></Input>
        </GridZutaten>
      </Wrapper>
      <Footer></Footer>
    </Grid>
  )
}
const Wrapper = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 20px 46px) 20px 66px;
  margin: 15px;
  grid-gap: 15px;
`
const Headline = styled.h4`
  font-size: 16px;
  margin: 0%;
`
const Input = styled.input`
  height: 30px;
  width: auto;
  border: solid 2px black;
`
const GridZutaten = styled.div`
  display: grid;
  grid-template-columns: 80px 80px auto;
  grid-template-rows: 20px 46px;
  grid-gap: 15px;
`
