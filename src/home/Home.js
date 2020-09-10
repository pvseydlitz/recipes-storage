import React from 'react'
import styled from 'styled-components/macro'
import Grid from '../Grid'
import Header from '../Header'
import Footer from '../Footer'
import Recipe from './Recipe'

export default function Home({ recipes }) {
  return (
    <Grid>
      <Header></Header>
      <Recipes>
        {recipes.map((recipe, index) => (
          <Recipe recipe={recipe} key={index}></Recipe>
        ))}
      </Recipes>
      <Footer></Footer>
    </Grid>
  )
}

const Recipes = styled.div`
  overflow-y: scroll;
`
