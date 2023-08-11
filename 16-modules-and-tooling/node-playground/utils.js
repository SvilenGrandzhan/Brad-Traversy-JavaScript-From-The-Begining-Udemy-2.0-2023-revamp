// commonJS export module
// const message = {
//   id: 1,
//   text: 'Boom Boom!',
// }
// module.exports = message

//another option is following
// module.exports = {
//   id: 1,
//   text: 'Boom Boom!',
// }

function capitalizeWords(string) {
  return (
    string
      // make all lower case to make sure they are the same
      .toLowerCase()
      // split text to single words using space between
      .split(' ')
      // looping trough the new array of words. First letter is 0 element of word
      //concatenate the rest of the word with substr
      .map((word) => word[0].toUpperCase() + word.substr(1))
      // converting everything back to string
      .join(' ')
  )
}

function markMoney(amount) {
  return `$${amount}`
}

// module.exports = capitalizeWords
// module.exports = markMoney
// or make it in a object
// module.exports = {
//   capitalizeWords,
//   markMoney,
// }

// This is how export single module
export { capitalizeWords, markMoney }
