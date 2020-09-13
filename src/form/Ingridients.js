import React from 'react'
import styled from 'styled-components/macro'
import DropdownEinheiten from './DropdownEinheiten'
import Icons from './Icons'

export default function Ingridients() {
  function showMoreInputFields() {
    const numberOfInputs = document.querySelectorAll('.GridZutaten').length
    const searchedElement = numberOfInputs + 1
    const number = numberOfInputs + 2
    const el = document.getElementById(`${searchedElement}`)
    const newInput = document.createElement('div')
    newInput.className = 'GridZutaten'
    newInput.id = number
    newInput.innerHTML = `
              <input class="Input" type="number" name="menge${number}" id="menge${number}"></input>
              <select class="Dropdown" name="einheit${number}" id="einheit${number}">
                <option value=""></option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="l">l</option>
                <option value="EL">EL</option>
                <option value="TL">TL</option>
              </select>
              <input class="Input" type="text" name="produkt${number}" id="produkt${number}"></input>
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
  return (
    <div>
      <GridZutaten id={1}>
        <Headline>Menge</Headline>
        <Headline>Einheit</Headline>
        <Headline>Produkt</Headline>
        <Input type="number" name="menge1" id="menge1"></Input>
        <DropdownEinheiten></DropdownEinheiten>
        <Input type="text" name="produkt1" id="produkt1"></Input>
      </GridZutaten>
      <Icons show={showMoreInputFields} hide={hideLastInputField}></Icons>
    </div>
  )
}

const GridZutaten = styled.div`
  display: grid;
  grid-template-columns: 80px 80px auto;
  grid-template-rows: 10px 26px;
  grid-gap: 15px;
`
const Headline = styled.h4`
  font-size: 16px;
  margin: 0%;
`
const Input = styled.input`
  height: 20px;
  width: auto;
  border: solid 2px black;
`
