import React from 'react'
import styled from 'styled-components/macro'

import closeIcon from '../icons/close.svg'
import arrowRight from '../icons/arrowRight.svg'

export default function ModalDetailsRecipe({ recipe }) {
  function closeModal() {
    const modal = document.getElementById(`modalDetails${recipe._id}`)
    modal.style.display = 'none'
  }
  function showNextModal() {
    const modal = document.getElementById(`modalDetails${recipe._id}`)
    modal.style.display = 'none'
    const modal2 = document.getElementById(`modalStep1${recipe._id}`)
    modal2.style.display = 'block'
  }
  return (
    <OuterWrapper id={`modalDetails${recipe._id}`}>
      <FlexBox>
        <Wrapper>
          <Title>{recipe.titel}</Title>
          <CloseIcon src={closeIcon} onClick={closeModal}></CloseIcon>
          <ArrowRight src={arrowRight} onClick={showNextModal}></ArrowRight>
          <Headline>Benötigte Zutaten</Headline>
          <List>
            {recipe.zutaten.map((zutat, index) => (
              <li key={index}>
                {zutat.menge} {zutat.einheit} {zutat.produkt}
              </li>
            ))}
          </List>
        </Wrapper>
      </FlexBox>
    </OuterWrapper>
  )
}
const OuterWrapper = styled.div`
  display: none;
  background: white;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const Wrapper = styled.div`
  background: lightgrey;
  margin: 15px;
  padding: 15px;
  width: 100%;
  position: relative;
  border-radius: 15px;
`
const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: bold;
`
const Headline = styled.p`
  font-size: 14px;
  margin: 10px 0 5px 0;
  font-weight: bold;
  display: inline-block;
`
const List = styled.ul`
  margin: 0;
`
const CloseIcon = styled.img`
  width: 30px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`
const ArrowRight = styled.img`
  width: 30px;
  position: absolute;
  right: 5px;
  bottom: 5px;
  cursor: pointer;
`
