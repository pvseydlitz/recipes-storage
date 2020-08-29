import React from 'react'
import Recipe from './Recipe'
import recipes from './recipes.json'

export default function App() {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Recipe recipe={recipe} key={index}></Recipe>
      ))}
    </div>
  )
}
