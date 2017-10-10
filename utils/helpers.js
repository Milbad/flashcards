import { AsyncStorage } from 'react-native'

//return all of the decks along with their titles, questions, and answers.
export function getDecks () {
  return AsyncStorage.getItem('decks')
  .then(returnStorage)
  }
//take in a single id argument and return the deck associated with that id.
export function getDeck (id) {
  return AsyncStorage.getItem(id)
}
//take in a single title argument and add it to the decks.
export function saveDeckTitle (title) {
  const data = {
    [title]:
      {
        title: title,
        questions: []
      }
  }
  return AsyncStorage.mergeItem('decks', JSON.stringify(data))
}
//take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.
export function addCardToDeck (title, card) {
  return AsyncStorage.getItem('decks')
    .then((results) => {
      const data = JSON.parse(results)
      const newdata = {
        [title]:
        {
          title:title,
          questions: data[title].questions.concat([card])
        }
      }
      AsyncStorage.mergeItem('decks', JSON.stringify(newdata))
    })

}


function setinitialDate () {

  let initialData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }


  AsyncStorage.setItem('decks', JSON.stringify(initialData))

  return initialData
}

function returnStorage (results) {
  return results === null
    ? setinitialDate()
    : JSON.parse(results)
}
