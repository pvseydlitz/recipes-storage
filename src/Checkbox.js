import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Checkbox({ name, number }) {
  const [checked, setChecked] = useState(false)
  return (
    <Label htmlFor={number + 20} active={checked}>
      {name}
      <Tag
        type="checkbox"
        id={number + 20}
        name={number + 20}
        value={name}
        onChange={() => setChecked(!checked)}
      ></Tag>
    </Label>
  )
}

const Label = styled.label`
  background: ${(props) => (props.active ? 'red' : 'lightgrey')};
  padding: 5px;
  margin-right: 10px;
`
const Tag = styled.input`
  all: unset;
`
Checkbox.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
}
