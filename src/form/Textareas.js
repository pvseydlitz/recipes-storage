import React from 'react'
import styled from 'styled-components/macro'
import Icons from './Icons'

export default function Textareas() {
  function showMoreTextAreas() {
    const numberOfInputs = document.querySelectorAll('.GridTextareas').length
    const searchedElement = numberOfInputs + 1 + 10
    const number = numberOfInputs + 2
    const el = document.getElementById(`${searchedElement}`)
    const newTextArea = document.createElement('div')
    newTextArea.className = 'GridTextareas'
    newTextArea.id = number + 10
    newTextArea.innerHTML = `
        <h4 class="Headline">${number}.</h4>
        <textarea rows="3" class="Textarea" name="arbeitsschritt${number}"></textarea>
    `
    el.insertAdjacentElement('afterend', newTextArea)
  }

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
        <Textarea rows="3" name="arbeitsschritt1"></Textarea>
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
