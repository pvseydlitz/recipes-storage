import React from 'react'
import styled from 'styled-components/macro'
import './upload.css'
import Grid from './Grid'
import Header from './Header'
import Footer from './Footer'
import DropdownEinheiten from './DropdownEinheiten'
import plusIcon from './icons/plus.svg'
import minusIcon from './icons/minus.svg'

export default function Upload() {
  function showMoreInputFields() {
    let numberOfInputs = document.querySelectorAll('.GridZutaten').length
    const searchedElement = numberOfInputs + 1
    let number = numberOfInputs + 2
    const el = document.getElementById(`${searchedElement}`)
    const newInput = document.createElement('div')
    newInput.className = 'GridZutaten'
    newInput.id = number
    newInput.innerHTML = `
          <h4 class="Headline">Menge</h4>
          <h4 class="Headline">Einheit</h4>
          <h4 class="Headline">Produkt</h4>
          <input class="Input" type="number" name="menge${number}"></input>
          <select class="Dropdown" name="einheit${number}">
            <option value=""></option>
            <option value="gramm">g</option>
            <option value="kilogramm">kg</option>
            <option value="milliliter">ml</option>
            <option value="liter">l</option>
            <option value="esslöffel">EL</option>
            <option value="tl">TL</option>
          </select>
          <input class="Input" type="text" name="produkt${number}"></input>
    `
    el.insertAdjacentElement('afterend', newInput)
  }
  function hideLastInputField() {
    let numberOfInputs = document.querySelectorAll('.GridZutaten').length + 1
    if (numberOfInputs > 1) {
      const searchedElement = document.getElementById(numberOfInputs)
      searchedElement.remove()
    }
  }

  function uploadRecipe(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    let zutaten = []
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
    })
    data.zutaten = zutaten
    console.log(data)
  }

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
          <GridZutaten id={1}>
            <Headline>Menge</Headline>
            <Headline>Einheit</Headline>
            <Headline>Produkt</Headline>
            <Input type="number" name="menge1"></Input>
            <DropdownEinheiten></DropdownEinheiten>
            <Input type="text" name="produkt1"></Input>
          </GridZutaten>
          <Icons>
            <Icon src={plusIcon} onClick={() => showMoreInputFields()}></Icon>
            <Icon src={minusIcon} onClick={() => hideLastInputField()}></Icon>
          </Icons>
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
`
const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 20px 46px) 20px;
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
  grid-template-rows: 20px 36px;
  grid-gap: 15px;
`
const Icon = styled.img`
  cursor: pointer;
  width: 30px;
`
const Icons = styled.div`
  display: inline-block;
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
