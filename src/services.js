export function getRecipes() {
  return fetch('/recipes').then((res) => res.json())
}
export function checkIfRecipeExists(_id) {
  const searchedRecipe = { _id: `${_id}` }
  return fetch('/checkIfRecipeExists', {
    method: 'POST',
    body: JSON.stringify(searchedRecipe),
    headers: {
      'content-type': 'application/json',
    },
  }).then((res) => res.json())
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

export function uploadPicture(picture) {
  return fetch('/api/uploadPicture', {
    method: 'POST',
    body: picture,
  }).then((res) => res.json())
}

export function deletePicture(data) {
  if (data.picture !== undefined) {
    const photoName = data.picture.photoName
    return fetch('/api/uploadPicture', {
      method: 'DELETE',
      body: photoName,
    }).then((res) => res.json())
  }
}

export function getCategories() {
  return fetch('/categories').then((res) => res.json())
}

export function getProducts() {
  return fetch('/api/products').then((res) => res.json())
}
