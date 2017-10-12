import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MyButton from './MyButton'
import { connect } from 'react-redux'

class DeckDetail extends Component {

  render () {
    const { deck, navigation } = this.props
    const cardText = deck.questions.length <= 1 ? 'card' : 'cards'

    return (
      <View style={styles.container}>
        {deck.questions !== undefined && (
        <View>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.cardsNum}>{deck.questions.length} {cardText}</Text>
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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    width:200,
  },
  title: {
    padding:5,
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  cardsNum: {
    padding: 5,
    fontSize:18,
    color: 'grey',
    textAlign:'center',
  }
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
