import React from 'react'
import styled from 'styled-components/macro'
import Icons from './Icons'

import {showMoreTextAreas} from './functions'

export default function Textareas() {

  function hideLastTextArea() {
    const numberOfInputs =
      document.querySelectorAll('.GridTextareas').length + 1 + 10
    if (numberOfInputs > 11) {
      const searchedElement = document.getElementById(numberOfInputs)
      searchedElement.remove()
    }
  }
  return (
    <div>
      <WrapperTextareas id={11}>
        <Headline>1.</Headline>
        <Textarea
          rows="3"
          name="arbeitsschritt1"
          id="arbeitsschritt1"
        ></Textarea>
      </WrapperTextareas>
      <Icons show={showMoreTextAreas} hide={hideLastTextArea}></Icons>
    </div>
  )
}
const WrapperTextareas = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  margin-top: 10px;
`
const Headline = styled.h4`
  font-size: 16px;
  margin: 0%;
`
const Textarea = styled.textarea`
  font-size: 14px;
  resize: vertical;
  border: solid 2px black;
`
