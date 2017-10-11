import React from 'react'
import { Text, View} from 'react-native'
import StatusBarBlack from './components/StatusBarBlack'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { setLocalNotification } from './utils/notifications'
import {Stack} from './utils/route'

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
