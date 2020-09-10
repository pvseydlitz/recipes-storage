export function getRecipes() {
  return fetch('/recipes').then((res) => res.json())
}

export function postRecipe(recipe) {
  return fetch('/recipes', {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}

export function patchRecipe(recipe) {
  return fetch('/recipes/' + recipe.id, {
    method: 'PATCH',
    body: JSON.stringify(recipe),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
}

export function deleteRecipe(id) {
  return fetch('/recipes/' + id, {
    method: 'DELETE',
  }).then((res) => res.json())
}
