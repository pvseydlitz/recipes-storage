import React from 'react'
import styled from 'styled-components/macro'

export default function DropdownEinheiten() {
  return (
    <DropDown name="aufwand" id="aufwand">
      <option value="0-10 min">0-10 min</option>
      <option value="10-20 min">10-20 min</option>
      <option value="20-30 min">20-30 min</option>
      <option value=">30 min">{'>30 min'}</option>
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
  width: 130px;
  height: 26px;
  padding-left: 10px;
  background-image: url('https://res.cloudinary.com/dajgs01gh/image/upload/v1581717374/dropdown_y3kmal.svg');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 95% center;
`
