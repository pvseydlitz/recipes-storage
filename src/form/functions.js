export function showMoreInputFields(serverMethod) {
  const numberOfInputs = document.querySelectorAll('.GridZutaten').length
  const searchedElement = numberOfInputs + 1
  const number = numberOfInputs + 2
  const el = document.getElementById(`${searchedElement}`)
  const newInput = document.createElement('div')
  newInput.className = 'GridZutaten'
  newInput.id = number
  newInput.innerHTML = `
              <input class="Input" type="number" name="menge${number}" id="menge${number}"></input>
              <select class="Dropdown" name="einheit${number}" id="einheit${number}">
                <option value=""></option>
                <option value="g">g</option>
                <option value="kg">kg</option>
                <option value="ml">ml</option>
                <option value="l">l</option>
                <option value="EL">EL</option>
                <option value="TL">TL</option>
              </select>
              <input class="Input" type="text" name="produkt${number}" id="produkt${number}"></input>
        `
  el.insertAdjacentElement('afterend', newInput)
  if (serverMethod === 'patch') {
  } else {
    document.getElementById(`menge${number}`).focus()
  }
}

export function showMoreTextAreas(serverMethod) {
  const numberOfInputs = document.querySelectorAll('.GridTextareas').length
  const searchedElement = numberOfInputs + 1 + 10
  const number = numberOfInputs + 2
  const el = document.getElementById(`${searchedElement}`)
  const newTextArea = document.createElement('div')
  newTextArea.className = 'GridTextareas'
  newTextArea.id = number + 10
  newTextArea.innerHTML = `
        <h4 class="Headline">${number}.</h4>
        <textarea rows="3" class="Textarea" name="arbeitsschritt${number}" id="arbeitsschritt${number}"></textarea>
    `
  el.insertAdjacentElement('afterend', newTextArea)
  if (serverMethod === 'patch') {
  } else {
    document.getElementById(`arbeitsschritt${number}`).focus()
  }
}
