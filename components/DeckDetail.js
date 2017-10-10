import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import MyButton from './MyButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'



class DeckDetail extends Component {


  render () {
    const deck = this.props.deck
    return (
      <View style={styles.container}>
        {deck.questions !== undefined && (
        <View>
          <Text style={styles.title}>{deck.title}</Text>
          {deck.questions.length <= 1
            ?<Text style={styles.cardsNum}>{deck.questions.length} card</Text>
            :<Text style={styles.cardsNum}>{deck.questions.length} cards</Text>
          }
          <View style={styles.containerbtn}>
            <MyButton stylebtn={{backgroundColor:'white'}} style={{color:'black'}} onPress={() => this.props.navigation.navigate(
                    'NewQuestion',{ title: deck.title})}>Add Card</MyButton>
            {deck.questions.length>0 &&(
            <MyButton  onPress={() => this.props.navigation.navigate(
                    'QuizView',{ deck: deck})}>Start Quiz</MyButton>
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
  submitBtnText: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
  },
  btn:{
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin:20,
    width:200,
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
