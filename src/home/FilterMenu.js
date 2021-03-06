import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Checkbox from './Checkbox'
import { getCategories } from '../services'

export default function FilterMenu({
  searchTitle,
  filterCategories,
  filterTime,
  filterCosts,
  //resetFilter,
}) {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(setCategories)
  }, [])
  //const [resetCheckbox, setResetCheckbox] = useState(false)
  function resetFilterValues() {
    window.location.href = '/'
    /* setResetCheckbox(true)
    document.getElementById('kosten').value = ''
    document.getElementById('aufwand').value = ''
    document.getElementById('searchTitle').value = ''
    console.log('reset filter')
    console.log(categories.length)
    for (let i = 0; i < categories.length; i++) {
      console.log(document.getElementById(`1${i}`))
      document.getElementById(`1${i}`).style.background = 'lightgrey'
    }

    resetFilter() */
  }

  return (
    <Wrapper>
      <Input
        id="searchTitle"
        placeholder="Nach Titel suchen"
        onChange={(event) => searchTitle(event)}
      ></Input>
      <CheckBoxes>
        {categories.map((categorie, index) => (
          <Checkbox
            name={categorie}
            number={index}
            //resetFilter={resetCheckbox}
            key={index}
            filterCategories={filterCategories}
          ></Checkbox>
        ))}
      </CheckBoxes>
      <DropDown
        name="aufwand"
        id="aufwand"
        style={{ marginRight: '20px' }}
        onChange={(event) => filterTime(event)}
      >
        <option defaultValue value="">
          Zeitaufwand
        </option>
        <option value="0-10 min">0-10 min</option>
        <option value="10-20 min">10-20 min</option>
        <option value="20-30 min">20-30 min</option>
        <option value=">30 min">{'>30 min'}</option>
      </DropDown>
      <DropDown
        name="kosten"
        id="kosten"
        onChange={(event) => filterCosts(event)}
      >
        <option defaultValue value="">
          Kosten
        </option>
        <option value="1">0-5 €</option>
        <option value="2">5-10 €</option>
        <option value="3">10-15 €</option>
        <option value="4">{'>15 €'}</option>
      </DropDown>
      <Button onClick={() => resetFilterValues()}>Filter Zurücksetzen</Button>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background: white;
  height: 220px;
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
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
`
const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer;
  background: lightgrey;
  font-size: 16px;
  width: 150px;
  height: 26px;
  padding-left: 10px;
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 95% center;
  margin-bottom: 20px;
`
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: lightgrey;
  width: 180px;
  cursor: pointer;
`
