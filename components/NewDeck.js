import React, {Component} from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { addDeck } from '../actions/index'
import { connect } from 'react-redux'
import { saveDeckTitle } from '../utils/helpers'
import MyButton from './MyButton'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {

  state = {
      input: '',
  }

  submit = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'DeckDetail',
      params: {title:this.state.input},
  })
    this.props.addDeck(this.state.input)
    this.props.navigation.dispatch(navigateAction)
    saveDeckTitle(this.state.input)
  }

  render () {
    const { input } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={'Title'}
          style={styles.input}
          value={input}
          onChangeText={(input) => this.setState({input})}
        />
        <MyButton display={!input} onPress={this.submit} stylebtn={input ? styles.btnactive : styles.btninactive}>
          Submit
      </MyButton>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  input:{
    width:300,
    backgroundColor: 'lightgrey',
    padding: 10,
    margin: 10,
    borderRadius: 7,
  },
  btninactive:{
    backgroundColor:'lightgrey',
    borderColor:'lightgrey',
  },
  btnactive:{
    backgroundColor:'black'
  },
})


export default connect(null, {addDeck})(NewDeck);
