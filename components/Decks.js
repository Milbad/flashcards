import React, {Component} from 'react'
import { View, Text, StyleSheet,ScrollView, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/helpers'
import { receiveEntries } from '../actions'
import { connect } from 'react-redux'
import MyButton from './MyButton'
import { setinitialDate } from '../utils/helpers'
import { AppLoading} from 'expo'

function Deck ({ deck, navigation }) {

  return (
      <View style={styles.deck}>
        <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate(
                'DeckDetail',{ title: deck.title})}>
          <Text style={styles.title}>{deck.title}</Text>
          {deck.questions.length <= 1
            ? <Text style={styles.cardsNum}>{deck.questions.length} card</Text>
            : <Text style={styles.cardsNum}>{deck.questions.length} cards</Text>
          }
        </TouchableOpacity>

      </View>
  )
}

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
          <Deck key={deck.title} deck={deck} navigation={navigation}/>
        ))}
      </ScrollView>
        <View style={{alignItems:'center'}}>
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
  title: {
    padding:5,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',

  },
  deck: {
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor:'black',

  },
  btn: {
    justifyContent: 'center',
    width: 300,
    height:150,
    padding:10,
  },
  cardsNum: {
    padding: 5,
    fontSize:18,
    color: 'grey',
    textAlign:'center',
  }
})

// Map state to props
const mapStateToProps = (entries) => {
    return {
      decks: entries
    }
}

export default connect(mapStateToProps)(Decks);
