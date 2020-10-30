import React, { useState } from 'react'
import styled from 'styled-components/macro'

import ModalDetailsRecipe from './ModalDetailsRecipe'
import ModalArbeitsschritte from './ModalArbeitsschritte'

import editIcon from '../icons/edit.svg'
import playIcon from '../icons/playIcon.svg'
import deleteIcon from '../icons/delete.svg'

export default function Recipe({ recipe, handleDelete }) {
  const [pictureFullScreen, setPictureFullSreen] = useState(false)
  const data = recipe

  let kosten = ''
  switch (data.kosten) {
    case '1':
      kosten = '€'
      break
    case '2':
      kosten = '€€'
      break
    case '3':
      kosten = '€€€'
      break
    case '4':
      kosten = '€€€€'
      break
    default:
      kosten = '€'
  }
  function clickEditButton() {
    localStorage.setItem('recipe to edit', JSON.stringify(recipe))
    window.location.href = '/upload'
  }
  function startCooking() {
    const modal = document.getElementById(`modalDetails${recipe._id}`)
    modal.style.display = 'block'
  }

  return (
    <div>
      <Wrapper>
        <GridTitle>
          <Title>{data.titel}</Title>
          <Icon src={editIcon} onClick={clickEditButton}></Icon>
          <Icon src={playIcon} onClick={startCooking}></Icon>
          <Icon src={deleteIcon} onClick={() => handleDelete(data)}></Icon>
        </GridTitle>
        <Text>{data.beschreibung}</Text>
        {data.picture !== undefined ? (
          <FlexBox>
            <Image
              src={require(`../../server/uploads/images/${data.picture.photoName}`)}
              onClick={() => setPictureFullSreen(true)}
            ></Image>
          </FlexBox>
        ) : (
          ''
        )}
        {pictureFullScreen ? (
          <FullScreenBackground>
            <WhiteBackground
              onClick={() => setPictureFullSreen(false)}
            ></WhiteBackground>
            <ImageFullScreen
              src={require(`../../server/uploads/images/${data.picture.photoName}`)}
            ></ImageFullScreen>
            <WhiteBackground
              onClick={() => setPictureFullSreen(false)}
            ></WhiteBackground>
          </FullScreenBackground>
        ) : (
          ''
        )}
        <div>
          <Headlines>Benötigte Zutaten:</Headlines>
          <Text>&nbsp;{data.zutaten.length} Produkte</Text>
        </div>
        <div>
          <Headlines>Arbeitsschritte:</Headlines>
          <Text>&nbsp;{data.arbeitsschritte.length}</Text>
        </div>
        <Headlines>Aufwand:</Headlines>
        <Text>&nbsp;{data.aufwand}</Text>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Headlines>Kosten:</Headlines>
        <Text>&nbsp;{kosten}</Text>
        <div>
          {data.kategorien.map((kategorie, index) => (
            <Kategorie key={index}>{kategorie}</Kategorie>
          ))}
        </div>
      </Wrapper>
      <ModalDetailsRecipe recipe={recipe}></ModalDetailsRecipe>
      {data.arbeitsschritte.map((arbeitsschritt, index) => (
        <ModalArbeitsschritte
          recipe={data}
          arbeitsschritt={arbeitsschritt}
          index={index}
          key={index}
        ></ModalArbeitsschritte>
      ))}
    </div>
  )
}

const Wrapper = styled.div`
  background-color: lightgrey;
  border-radius: 15px;
  margin: 15px;
  padding: 15px;
  position: relative;
`
const GridTitle = styled.div`
  max-width: 100%;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr repeat(3, 30px);
`
const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;
  font-weight: bold;
`
const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`
const Headlines = styled.p`
  font-size: 14px;
  margin: 10px 0 5px 0;
  font-weight: bold;
  display: inline-block;
`
const Text = styled.p`
  font-size: 14px;
  margin: 0;
  display: inline-block;
`
const Kategorie = styled.div`
  background-color: grey;
  padding: 5px 10px;
  display: inline-block;
  margin: 10px 10px 0 0;
  border-radius: 5px;
`
const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`
const Image = styled.img`
  width: auto;
  height: 100px;
`
const ImageFullScreen = styled.img`
  width: 100%;
  height: auto;
  z-index: 2;
`
const FullScreenBackground = styled.div`
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`
const WhiteBackground = styled.div`
  background: white;
  opacity: 95%;
`
