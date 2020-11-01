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
              const kategorien = recipe.kategorien.join('')
              const query = filteredCategories.join('')
              return filteredCategories === [] || kategorien.includes(query)
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
