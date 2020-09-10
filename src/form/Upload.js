import React from 'react'
import styled from 'styled-components/macro'
import './upload.css'
import Grid from '../Grid'
import Header from '../Header'
import Footer from '../Footer'
import Checkbox from './Checkbox'
import DropdownKosten from './DropdownKosten'
import DropdownAufwand from './DropdownAufwand'
import Textareas from './Textareas'
import Ingridients from './Ingridients'

export default function Upload() {
  function uploadRecipe(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let zutaten = []
    let arbeitsschritte = []
    let kategorien = []
    numbers.forEach((number) => {
      let menge = 'menge' + String(number)
      if (menge in data === true) {
        let menge = 'menge' + String(number)
        let einheit = 'einheit' + String(number)
        let produkt = 'produkt' + String(number)
        let zutat = {
          menge: data[menge],
          einheit: data[einheit],
          produkt: data[produkt],
        }
        zutaten.push(zutat)
        delete data[menge]
        delete data[einheit]
        delete data[produkt]
      }
      let arbeitsschritt = 'arbeitsschritt' + String(number)
      if (arbeitsschritt in data === true) {
        arbeitsschritte.push(data[arbeitsschritt])
        delete data[arbeitsschritt]
      }
      let kategorie = 19 + number

      if (kategorie in data === true) {
        kategorien.push(data[kategorie])
        delete data[kategorie]
      }
    })
    data.zutaten = zutaten
    data.arbeitsschritte = arbeitsschritte
    data.kategorien = kategorien
    console.log(data)
  }
  const categories = ['Fisch', 'Fleisch', 'Vegetarisch', 'Pasta', 'Salat']

  return (
    <Grid>
      <Header></Header>
      <Wrapper>
        <Form onSubmit={(event) => uploadRecipe(event)}>
          <Headline>Titel</Headline>
          <Input type="text" name="titel"></Input>
          <Headline>Beschreibung</Headline>
          <Input type="text" name="beschreibung"></Input>
          <Headline>Zutaten</Headline>
          <Ingridients></Ingridients>
          <Headline>Arbeitsschritte</Headline>
          <Textareas></Textareas>
          <Headline>Kategorien</Headline>
          <CheckBoxes>
            {categories.map((categorie, index) => (
              <Checkbox name={categorie} number={index} key={index}></Checkbox>
            ))}
          </CheckBoxes>
          <GridColumn>
            <Headline>Kosten</Headline>
            <DropdownKosten></DropdownKosten>
          </GridColumn>
          <GridColumn>
            <Headline>Arbeitsaufwand</Headline>
            <DropdownAufwand></DropdownAufwand>
          </GridColumn>
          <Center>
            <Button>Rezept Hochladen</Button>
          </Center>
        </Form>
      </Wrapper>
      <Footer></Footer>
    </Grid>
  )
}
const Wrapper = styled.div`
  overflow-y: scroll;
  width: 100vw;
`
const Form = styled.form`
  /* grid-template-rows: repeat(2, 20px 46px) 20px; */
  margin: 15px;
  display: block;
`
const Headline = styled.h4`
  font-size: 16px;
  margin: 20px 0 10px 0;
`
const Input = styled.input`
  height: 20px;
  width: 80%;
  border: solid 2px black;
`
const CheckBoxes = styled.div`
  display: inline-block;
`
const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  align-items: center;
  margin: 10px 0;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
`

const Button = styled.button`
  height: 30px;
  all: unset;
  padding: 4px 24px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: lightgrey;
  color: white;
`
