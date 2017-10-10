export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QA = 'ADD_QA'


export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}


export function addDeck (entry) {
  return {
    type: ADD_DECK,
    entry,
  }
}

export function addQA (title, questions) {
  return {
    type: ADD_QA,
    title,
    questions
  }
}
