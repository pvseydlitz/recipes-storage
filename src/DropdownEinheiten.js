import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownEinheiten() {
  return (
    <DropDown name="einheit">
      <option value=""></option>
      <option value="gramm">g</option>
      <option value="kilogramm">kg</option>
      <option value="milliliter">ml</option>
      <option value="liter">l</option>
      <option value="esslöffel">EL</option>
      <option value="tl">TL</option>
    </DropDown>
  )
}

const DropDown = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer;
  background: lightgrey;
  font-size: 16px;
  width: 80px;
  height: 36px;
  padding-left: 10px;
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 95% center;
`
