import React, {Component} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Deck ({ deck, navigation }) {
  const cardText = deck.questions.length <= 1 ? 'card' : 'cards'
  return (
      <View style={styles.deck}>
        <TouchableOpacity  style={styles.btn} onPress={() => navigation.navigate(
                'DeckDetail',{ title: deck.title})}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsNum}>{deck.questions.length} {cardText}</Text>
        </TouchableOpacity>
      </View>
  )
}


const styles = StyleSheet.create({
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
