import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Upload from './form/Upload'
import { getRecipes, postRecipe, patchRecipe } from './services'

export default function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes().then(setRecipes)
  }, [])
  function createRecipe(repiceData) {
    postRecipe(repiceData).then((recipe) => {
      setRecipes([recipe, ...recipes])
      window.location.href = '/'
    })
  }
  function updateRecipe(recipeData) {
    patchRecipe(recipeData).then((patchedRecipe) => {
      const index = recipes.findIndex(
        (recipe) => recipe._id === patchedRecipe._id
      )
      recipes[index] = patchedRecipe
      setRecipes([
        ...recipes.slice(0, index),
        patchedRecipe,
        ...recipes.slice(index + 1),
      ])
      window.location.href = '/'
    })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home recipes={recipes}></Home>
        </Route>
        <Route path="/upload">
          <Upload
            handleSubmit={createRecipe}
            handlePatch={updateRecipe}
          ></Upload>
        </Route>
      </Switch>
    </Router>
  )
}
