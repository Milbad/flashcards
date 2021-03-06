import React, {Component} from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { getDecks } from '../utils/helpers'
import { receiveEntries } from '../actions'
import { connect } from 'react-redux'
import MyButton from './MyButton'
import Deck from './Deck'
import { setinitialDate } from '../utils/helpers'
import { AppLoading} from 'expo'


function valuesToArray(obj) {
  return Object.keys(obj).map(function (key) { return obj[key]; });
}


class Decks extends Component {

  state = {
      ready: false,
    }

  componentDidMount () {
      const { dispatch } = this.props

      getDecks()
        .then((entries) => dispatch(receiveEntries(entries)))
        .then(() => this.setState(() => ({ready: true})))
    }

  render () {
    const {decks, currentDeck, navigation } = this.props
    const { ready } = this.state
    const decks2 = valuesToArray(decks)
    if (ready === false) {
      return <AppLoading />
    }
    return(

      <View style={styles.container}>
        <ScrollView>
          {decks2.map(deck => (
          <View key={deck.title} style={styles.deck}>
            <Deck deck={deck} navigation={navigation}/>
          </View>
        ))}
      </ScrollView>
        <View style={styles.containerbtn}>
          <MyButton  onPress={() => navigation.navigate('NewDeck')}>
            Add Deck
          </MyButton>
        </View>
      </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  deck: {
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor:'black',
  },
  containerbtn: {
    alignItems: 'center',
  },
})

// Map state to props
const mapStateToProps = (entries) => {
    return {
      decks: entries
    }
}

export default connect(mapStateToProps)(Decks);
