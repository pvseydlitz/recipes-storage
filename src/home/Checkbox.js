import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Checkbox({ name, number, filterCategories }) {
  const [checked, setChecked] = useState(false)
  function handleChange(event) {
    setChecked(!checked)
    if (checked === false) {
      filterCategories(event.target.value, 'push')
    } else {
      filterCategories(event.target.value, 'delete')
    }
  }
  return (
    <Label htmlFor={number} active={checked}>
      {name}
      <Tag
        type="checkbox"
        id={number}
        name={name}
        value={name}
        onChange={(event) => handleChange(event)}
      ></Tag>
    </Label>
  )
}

const Label = styled.label`
  background: ${(props) => (props.active ? 'darkgrey' : 'lightgrey')};
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`
const Tag = styled.input`
  all: unset;
`
Checkbox.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
}
