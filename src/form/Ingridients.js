import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import DropdownEinheiten from './DropdownEinheiten'
import Icons from './Icons'
import { showMoreInputFields } from './functions'
import { getProductNames } from '../services.js'

export default function Ingridients() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProductNames().then(setProducts)
  }, [])
  function hideLastInputField() {
    let numberOfInputs = document.querySelectorAll('.GridZutaten').length + 1
    if (numberOfInputs > 1) {
      const searchedElement = document.getElementById(numberOfInputs)
      searchedElement.remove()
    }
  }
  const [inputLength, setInputLength] = useState(0)
  function checkInput(event) {
    const input = event.target.value
    const filteredProducts = products.filter((product) =>
      product.toLowerCase().includes(input.toLowerCase())
    )
    const inputField = document.getElementById('produkt1')
    inputField.value = input
    if (input.length <= inputLength) {
      inputField.value = input
      setInputLength(input.length)
    } else {
      setInputLength(input.length)
      if (filteredProducts.length === 1) {
        inputField.value = filteredProducts[0]
        setInputLength(filteredProducts[0].length)
      }
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
        <Input
          type="text"
          name="produkt1"
          id="produkt1"
          list="products1"
          autoComplete="off"
          onChange={(event) => checkInput(event)}
        ></Input>
        <datalist id="products1">
          {products.map((product, index) => (
            <option value={product} key={index}></option>
          ))}
        </datalist>
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
  height: 26px;
  width: auto;
  border: solid 2px black;
`
