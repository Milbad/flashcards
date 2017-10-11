import { RECEIVE_ENTRIES, ADD_DECK, ADD_QA } from '../actions'

const initialState = {
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

function decksReducer  (state = {}, action)  {
  const {entries, decks, title, questions, entry} = action
  const deck = state[title]
  switch (action.type) {
    case RECEIVE_ENTRIES : {
        return entries
      }
    case ADD_DECK : {
        return Object.assign({}, state, {
            ...state,
            [entry]:
            {
            title: entry,
            questions: []
            }
        })
      }
      case ADD_QA : {
        return {
          ...state,
          [title] : {
          ...deck,
          questions: deck.questions.concat(questions)
          }
        }
      }
    default : {
      return state
    }    
  }
}

export default decksReducer
