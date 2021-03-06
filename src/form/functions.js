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
              <input class="Input" type="text" name="produkt${number}" id="produkt${number}" list="produktList${number}"></input>
        `
  el.insertAdjacentElement('afterend', newInput)
  if (serverMethod === 'patch') {
  } else {
    document.getElementById(`menge${number}`).focus()
  }
  addDataList(number)
}

function addDataList(number) {
  fetch('/api/productNames').then((res) =>
    res.json().then((products) => {
      const inputProduct = document.getElementById(`produkt${number}`)
      const dataList = document.createElement('datalist')
      dataList.id = `produktList${number}`

      products.forEach((product) => {
        const el = document.createElement('option')
        el.value = product
        dataList.appendChild(el)
        console.log(dataList)
      })
      inputProduct.insertAdjacentElement('afterend', dataList)
      inputProduct.addEventListener('input', (event) => {
        checkInput(event, products, number)
      })
    })
  )
}
let inputLength = 0
function checkInput(event, products, number) {
  const input = event.target.value
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(input.toLowerCase())
  )
  const inputField = document.getElementById(`produkt${number}`)
  inputField.value = input
  if (input.length <= inputLength) {
    inputField.value = input
    inputLength = input.length
  } else {
    inputLength = input.length
    if (filteredProducts.length === 1) {
      inputField.value = filteredProducts[0]
      inputLength = filteredProducts[0].length
    }
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
