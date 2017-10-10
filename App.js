import React from 'react'
import { StyleSheet, Text, View, Platform} from 'react-native'
import Decks from './components/Decks'
import DeckDetail from './components/DeckDetail'
import NewDeck from './components/NewDeck'
import NewQuestion from './components/NewQuestion'
import QuizView from './components/QuizView'
import StatusBarBlack from './components/StatusBarBlack'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/notifications'

const Stack = StackNavigator({
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

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <StatusBarBlack backgroundColor={'purple'} color={'white'} barStyle="light-content" />
          <Stack />
        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
