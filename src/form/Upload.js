import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import './upload.css'
import Grid from '../Grid'
import Header from '../Header'
import Footer from '../Footer'
import Checkbox from './Checkbox'
import DropdownKosten from './DropdownKosten'
import DropdownAufwand from './DropdownAufwand'
import Textareas from './Textareas'
import Ingridients from './Ingridients'

import uploadIcon from '../icons/upload.svg'

import { showMoreInputFields, showMoreTextAreas } from './functions'
import { checkIfRecipeExists, uploadPicture } from '../services'

export default function Upload({ handleSubmit, handlePatch }) {
  useEffect(() => {
    fillOutInputForEditing()
  })
  const [picture, setPicture] = useState('Kein Foto ausgewhält')
  const [selectedPicture, setSelectedPicture] = useState(null)

  const categories = ['Fisch', 'Fleisch', 'Vegetarisch', 'Pasta', 'Salat']
  function fillOutInputForEditing() {
    const recipeToEdit = localStorage.getItem('recipe to edit')
    const recipeAsObject = JSON.parse(recipeToEdit)
    if (recipeToEdit !== null) {
      document.querySelector('#titel').value = recipeAsObject.titel
      document.querySelector('#beschreibung').value =
        recipeAsObject.beschreibung
      for (let i = 1; i <= recipeAsObject.zutaten.length; i++) {
        document.querySelector(`#menge${i}`).value =
          recipeAsObject.zutaten[i - 1].menge
        document.querySelector(`#einheit${i}`).value =
          recipeAsObject.zutaten[i - 1].einheit
        document.querySelector(`#produkt${i}`).value =
          recipeAsObject.zutaten[i - 1].produkt
        showMoreInputFields('patch')
      }
      for (let i = 1; i <= recipeAsObject.arbeitsschritte.length; i++) {
        document.querySelector(`#arbeitsschritt${i}`).value =
          recipeAsObject.arbeitsschritte[i - 1]
        showMoreTextAreas('patch')
      }
      const ids = [20, 21, 22, 23, 24]
      ids.forEach((id, index) => {
        if (recipeAsObject.kategorien.includes(categories[index])) {
          document.getElementById(`${id}`).click()
        }
      })
      document.getElementById('kosten').value = recipeAsObject.kosten
      document.getElementById('aufwand').value = recipeAsObject.aufwand
      document.getElementById('id').value = recipeAsObject._id
      document.getElementById('foto').innerHTML = 'Foto Ändern'
      localStorage.removeItem('recipe to edit')
    }
  }
  function uploadRecipe(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    let id = 0
    data.id === '' ? (id = 1) : (id = data.id)

    checkIfRecipeExists(id).then((exists) => {
      let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      let zutaten = []
      let arbeitsschritte = []
      let kategorien = []
      numbers.forEach((number) => {
        let menge = 'menge' + String(number)
        if (menge in data === true) {
          let menge = 'menge' + String(number)
          let einheit = 'einheit' + String(number)
          let produkt = 'produkt' + String(number)
          let zutat = {
            menge: data[menge],
            einheit: data[einheit],
            produkt: data[produkt],
          }
          if (
            zutat.menge !== '' &&
            zutaten.einheit !== '' &&
            zutaten.produkt !== ''
          ) {
            zutaten.push(zutat)
          }
          delete data[menge]
          delete data[einheit]
          delete data[produkt]
        }
        let arbeitsschritt = 'arbeitsschritt' + String(number)
        if (arbeitsschritt in data === true && data[arbeitsschritt] !== '') {
          arbeitsschritte.push(data[arbeitsschritt])
          delete data[arbeitsschritt]
        }
        let kategorie = 19 + number

        if (kategorie in data === true) {
          kategorien.push(data[kategorie])
          delete data[kategorie]
        }
      })
      data.zutaten = zutaten
      data.arbeitsschritte = arbeitsschritte
      data.kategorien = kategorien

      const formDataPicture = new FormData()
      formDataPicture.append('photoUpload', selectedPicture)

      confirmAlert({
        title: 'Upload Bestätigen',
        message: 'Soll dieses Rezept wirklich hochgeladen werden?',
        buttons: [
          {
            label: 'Ja',
            onClick: () => {
              uploadPicture(formDataPicture).then((response) => {
                if (response === 'Nur Bilddateien dürfen hochgeladen werden!') {
                  wrongFileType(response)
                } else if (response === 'Kein Bild ausgewählt') {
                  if (exists === true) {
                    console.log('patch kein Bild')
                    handlePatch(data)
                  } else {
                    console.log('submit kein Bild')
                    handleSubmit(data)
                  }
                } else {
                  const picture = {}
                  picture.photoName = response.filename
                  picture.photoPath = response.path
                  picture.originalName = response.originalname
                  picture.type = response.mimetype
                  data.picture = picture
                  delete data.photoUpload
                  if (exists === true) {
                    console.log('patch mit Bild')
                    handlePatch(data)
                  } else {
                    console.log('submit mit Bild')
                    handleSubmit(data)
                  }
                }
              })
            },
          },
          {
            label: 'Nein',
            onClick: () => {},
          },
        ],
      })
    })
  }
  function wrongFileType(response) {
    confirmAlert({
      title: response,
      message: 'Erlaubte Dateiformate: jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF',
      buttons: [
        {
          label: 'Schließen',
          onClick: () => {},
        },
      ],
    })
  }

  function handlePicture(event) {
    if (event.target.files.length > 0) {
      setPicture(event.target.files[0].name)
      setSelectedPicture(event.target.files[0])
    } else {
      setPicture('Kein Foto ausgewählt')
    }
  }
  return (
    <Grid>
      <Wrapper>
        <Header title="Neues Rezept hinzufügen"></Header>
        <Form
          onSubmit={(event) => uploadRecipe(event)}
          enctype="multipart/form-data"
        >
          <Headline>Titel</Headline>
          <Input type="text" name="titel" id="titel"></Input>
          <Headline>Beschreibung</Headline>
          <Input type="text" name="beschreibung" id="beschreibung"></Input>
          <Headline>Zutaten</Headline>
          <Ingridients></Ingridients>
          <Headline>Arbeitsschritte</Headline>
          <Textareas></Textareas>
          <Headline>Kategorien</Headline>
          <CheckBoxes>
            {categories.map((categorie, index) => (
              <Checkbox name={categorie} number={index} key={index}></Checkbox>
            ))}
          </CheckBoxes>
          <GridColumn>
            <Headline0Margin>Kosten</Headline0Margin>
            <DropdownKosten></DropdownKosten>
          </GridColumn>
          <GridColumn>
            <Headline0Margin>Arbeitsaufwand</Headline0Margin>
            <DropdownAufwand></DropdownAufwand>
          </GridColumn>
          <GridColumn>
            <Headline0Margin id="foto">Foto hochladen</Headline0Margin>
            <Label htmlFor="photoUpload">
              <FileUploadIcon src={uploadIcon}></FileUploadIcon>
              <InputFile
                id="photoUpload"
                type="file"
                name="photoUpload"
                onChange={(event) => handlePicture(event)}
              ></InputFile>
              <ChoosenPicture>&nbsp;&nbsp;{picture}</ChoosenPicture>
            </Label>
          </GridColumn>
          <GridColumn style={{ display: 'none' }}>
            <Headline0Margin>ID</Headline0Margin>
            <Input name="id" id="id" readOnly={true}></Input>
          </GridColumn>
          <Center>
            <Button>Rezept Hochladen</Button>
          </Center>
        </Form>
      </Wrapper>
      <Footer></Footer>
    </Grid>
  )
}
const Wrapper = styled.div`
  overflow-y: scroll;
  width: 100vw;
`
const Form = styled.form`
  /* grid-template-rows: repeat(2, 20px 46px) 20px; */
  margin: 15px;
  display: block;
`
const Headline = styled.h4`
  font-size: 16px;
  margin: 20px 0 10px 0;
`
const Headline0Margin = styled.h4`
  font-size: 16px;
  margin: 0px;
`
const Input = styled.input`
  height: 20px;
  width: 80%;
  border: solid 2px black;
`
const InputFile = styled.input`
  display: none;
`
const FileUploadIcon = styled.img`
  width: 30px;
  cursor: pointer;
`
const Label = styled.label`
  display: flex;
  height: 100%;
  align-items: center;
`
const ChoosenPicture = styled.span`
  font-size: 10px;
  font-style: italic;
`
const CheckBoxes = styled.div`
  display: inline-block;
`
const GridColumn = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  align-items: center;
  margin: 30px 0;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
`
const Button = styled.button`
  height: 30px;
  all: unset;
  padding: 4px 24px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  background: lightgrey;
  color: white;
`
