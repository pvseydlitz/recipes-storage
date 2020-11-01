import React from 'react'
import styled from 'styled-components/macro'
import Checkbox from './Checkbox'

export default function FilterMenu({ searchTitle, filterCategories }) {
  const categories = ['Fisch', 'Fleisch', 'Vegetarisch', 'Pasta', 'Salat']

  return (
    <Wrapper>
      <Input
        placeholder="Nach Titel suchen"
        onChange={(event) => searchTitle(event)}
      ></Input>
      <CheckBoxes>
        {categories.map((categorie, index) => (
          <Checkbox
            name={categorie}
            number={index}
            key={index}
            filterCategories={filterCategories}
          ></Checkbox>
        ))}
      </CheckBoxes>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: white;
  height: 200px;
  width: 100%;
  padding: 15px;
`
const Input = styled.input`
  height: 20px;
  width: 100%;
  border: solid 2px black;
  margin-bottom: 20px;
`
const CheckBoxes = styled.div`
  display: inline-block;
`
