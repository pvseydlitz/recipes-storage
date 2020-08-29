import React from 'react'
import styled from 'styled-components/macro'

export default function Recipe(recipe) {
  const data = recipe.recipe

  let kosten = ''
  switch (data.kosten) {
    case 1:
      kosten = '€'
      break
    case 2:
      kosten = '€€'
      break
    case 3:
      kosten = '€€€'
      break
    case 4:
      kosten = '€€€€'
      break
    default:
      kosten = '€'
  }

  return (
    <Wrapper>
      <Title>{data.titel}</Title>
      <Text>{data.beschreibung}</Text>
      <Headline>Benötigte Zutaten</Headline>
      <ul>
        {data.zutaten.map((zutat, index) => (
          <li key={index}>
            {zutat.menge} {zutat.einheit} {zutat.produkt}
          </li>
        ))}
      </ul>
      <Headline>Arbeitsschritte</Headline>
      <ol>
        {data.arbeitsschritte.map((arbeitsschritt, index) => (
          <li key={index}>{arbeitsschritt}</li>
        ))}
      </ol>
      {data.kategorien.map((kategorie, index) => (
        <Kategorie key={index}>{kategorie}</Kategorie>
      ))}
      <Text>Aufwand: {data.aufwand} min</Text>
      <Text>Kosten: {kosten}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgrey;
  border-radius: 15px;
  margin: 15px;
  padding: 10px;
`
const Title = styled.p`
  margin: 0;
  font-weight: bold;
`
const Text = styled.div`
  font-size: 14px;
`
const Headline = styled.h3``

const Kategorie = styled.div`
  background-color: grey;
  padding: 5px 10px;
  display: inline-block;
  margin: 10px;
  border-radius: 5px;
`
