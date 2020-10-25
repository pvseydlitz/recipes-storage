import React from 'react'
import styled from 'styled-components/macro'
import Globalstyles from '../Globalstyles'
import Grid from '../Grid'
import Header from '../Header'
import Footer from '../Footer'
import Recipe from './Recipe'

import arrowUp from '../icons/arrowUp.svg'

export default function Home({ recipes }) {
  function scrollToTop() {
    const header = document.querySelector('#header')
    header.scrollIntoView({block: "end", behavior: "smooth"})
  }

  return (
    <div>
      <Globalstyles></Globalstyles>
      <Grid>
        <Recipes>
          <Header title="Rezeptesammlung"></Header>
          {recipes.map((recipe, index) => (
            <Recipe recipe={recipe} key={index}></Recipe>
          ))}
        </Recipes>
        <Footer></Footer>
      </Grid>
      <ArrowUp src={arrowUp} onClick={() => scrollToTop()}></ArrowUp>
    </div>
  )
}

const Recipes = styled.div`
  overflow-y: scroll;
  position: relative;
`
const ArrowUp = styled.img`
position: absolute;
bottom: 80px;
right: 20px;
width: 30px;
cursor: pointer;
`
