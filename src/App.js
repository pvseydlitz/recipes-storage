import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './home/Home'
import Upload from './form/Upload'
import { getRecipes, postRecipe } from './services'

export default function App() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipes().then(setRecipes)
  }, [])
  function createRecipe(repiceData) {
    postRecipe(repiceData).then((recipe) => {
      setRecipes([recipe, ...recipes])
    })
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home recipes={recipes}></Home>
        </Route>
        <Route path="/upload">
          <Upload handleSubmit={createRecipe}></Upload>
        </Route>
      </Switch>
    </Router>
  )
}
