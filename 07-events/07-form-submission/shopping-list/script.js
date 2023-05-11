const form = document.getElementById('item-form')
const onSubmit = (e) => {
  e.preventDefault()
  const item = document.getElementById('item-input').value
  const priority = document.getElementById('priority-input')
  console.log(item, priority.value)
}

const onSubmit2 = (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  const item = formData.get('item')
  // FormData is using name attribute of the form
  const priority = formData.get('priority')
  // FormData is using name attribute of the form
  const entries = formData.entries()
  //   console.log(item, priority)
  //   console.log(entries)
  //   // We get an Iterator
  //   // We can use for of loop
  for (let entry of entries) {
    console.log(entry)
  }
}

// form.addEventListener('submit', onSubmit)
form.addEventListener('submit', onSubmit2)
