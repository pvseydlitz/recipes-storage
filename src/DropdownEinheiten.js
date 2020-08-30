import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownEinheiten() {
  return (
    <DropDown name="einheit1">
      <option value=""></option>
      <option value="g">g</option>
      <option value="kg">kg</option>
      <option value="ml">ml</option>
      <option value="l">l</option>
      <option value="EL">EL</option>
      <option value="TL">TL</option>
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
