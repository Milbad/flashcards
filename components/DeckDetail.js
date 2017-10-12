import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from './MyButton'
import { connect } from 'react-redux'
import Deck from './Deck'

class DeckDetail extends Component {

  render () {
    const { deck, navigation } = this.props
    const cardText = deck.questions.length <= 1 ? 'card' : 'cards'

    return (
      <View style={styles.container}>
        {deck.questions !== undefined && (
        <View>
          <Deck key={deck} deck={deck} navigation={navigation}/>
          <View style={styles.containerbtn}>
            <MyButton
              stylebtn={{backgroundColor:'white'}}
              style={{color:'black'}}
              onPress={() => navigation.navigate('NewQuestion',{ title: deck.title})}>Add Card
            </MyButton>
             {deck.questions.length >0 && (
             <MyButton
               onPress={() => navigation.navigate('QuizView',{ deck: deck})}>Start Quiz
             </MyButton>
            )}
          </View>
        </View>
        )}
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
  containerbtn: {
    alignItems: 'center',
  },
})

// Map state to props
const mapStateToProps = (state,{ navigation }) => {
  const { title } = navigation.state.params
  if(title){
    return {
      deck: state[title]
    }
  }

}


export default connect(mapStateToProps)(DeckDetail);
