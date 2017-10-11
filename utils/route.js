import { StackNavigator } from 'react-navigation'
import Decks from '../components/Decks'
import DeckDetail from '../components/DeckDetail'
import NewDeck from '../components/NewDeck'
import NewQuestion from '../components/NewQuestion'
import QuizView from '../components/QuizView'

export const Stack = StackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title:'Decks',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title:'New Deck',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  NewQuestion: {
    screen: NewQuestion,
    navigationOptions: {
      title:'New Card',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      title:'Quiz',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    }
  },
})
