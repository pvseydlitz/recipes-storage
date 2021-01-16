import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Globalstyles from '../Globalstyles'
import Grid from '../Grid'
import Header from '../Header'
import FilterMenu from './FilterMenu'
import Footer from '../Footer'
import Recipe from './Recipe'

import arrowUp from '../icons/arrowUp.svg'

export default function Home({ recipes, handleDelete }) {
  function scrollToTop() {
    const header = document.querySelector('#header')
    header.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  const [displayFilterMenu, setDisplayFilterMenu] = useState(false)
  function handleFilterMenu() {
    setDisplayFilterMenu(!displayFilterMenu)
  }
  const [searchedTitle, setSearchedTitle] = useState('')
  const [filteredCategories, setFilteredCategories] = useState([])
  const [filteredTime, setFilteredTime] = useState('')
  const [filteredCosts, setFilteredCosts] = useState('')

  function handleCategoryFilter(value, method) {
    if (method === 'push') {
      setFilteredCategories([...filteredCategories, value])
    } else {
      const index = filteredCategories.findIndex(
        (category) => category === value
      )
      setFilteredCategories([
        ...filteredCategories.slice(0, index),
        ...filteredCategories.slice(index + 1),
      ])
    }
  }
  function resetFilter() {
    console.log('reset filter')
    setSearchedTitle('')
    setFilteredCategories([])
    setFilteredCosts('')
    setFilteredTime('')
  }
  return (
    <div>
      <Globalstyles></Globalstyles>
      <Grid>
        <Recipes>
          <Header
            title="Rezeptesammlung"
            showFilter={true}
            showFilterMenu={handleFilterMenu}
          ></Header>
          {displayFilterMenu ? (
            <FilterMenu
              searchTitle={(event) => setSearchedTitle(event.target.value)}
              filterCategories={(value, method) =>
                handleCategoryFilter(value, method)
              }
              filterTime={(event) => setFilteredTime(event.target.value)}
              filterCosts={(event) => setFilteredCosts(event.target.value)}
              resetFilter={resetFilter}
            ></FilterMenu>
          ) : (
            ''
          )}
          {recipes
            .filter((recipe) => {
              const title = recipe.titel.toUpperCase()
              const query = searchedTitle.toUpperCase()
              return query === '' || title.includes(query)
            })
            .filter((recipe) => {
              let kategorien = []
              recipe.kategorien.forEach((a) => {
                const index = filteredCategories.findIndex((b) => b === a)
                if (index !== -1) {
                  kategorien.push(filteredCategories[index])
                }
              })
              const query = filteredCategories.sort().join('')
              const kategorienString = kategorien.sort().join('')
              return (
                filteredCategories === [] || kategorienString.includes(query)
              )
            })
            .filter((recipe) => {
              return (
                filteredTime === '' || recipe.aufwand.includes(filteredTime)
              )
            })
            .filter((recipe) => {
              return (
                filteredCosts === '' || recipe.kosten.includes(filteredCosts)
              )
            })

            .map((recipe, index) => (
              <Recipe
                recipe={recipe}
                key={index}
                handleDelete={handleDelete}
              ></Recipe>
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
