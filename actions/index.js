export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QA = 'ADD_QA'

export const receiveEntries = entries => ({ type:  RECEIVE_ENTRIES, entries })

export const addDeck = entry => ({ type:  ADD_DECK, entry })

export const addQA = (title, questions) => ({ type:  ADD_QA, title, questions })
