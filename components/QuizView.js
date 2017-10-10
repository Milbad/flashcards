import React, {Component} from 'react'
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native'
import MyButton from './MyButton'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { setLocalNotification, clearLocalNotification } from '../utils/notifications'

function pressCorrect(counter, score) {
     counter+=1;
     score+=1;
    return {counter, score}
}

function getPercent(score, max){
  return Math.trunc(score/max*100)
}

class QuizView extends Component {

  componentDidMount () {
    clearLocalNotification()
    .then(setLocalNotification)
  }

  state = {
      score: 0,
      counter:0,
      mode:'Answer',
  }


  reinitState = () => {
    this.setState({
      score: 0,
      mode:'Answer',
      counter: 0
    })
  }

  pressCorrect = () => {
    this.setState({
      score: this.state.score + 1,
      mode:'Answer',
      counter: this.state.counter + 1
    })

  }

  pressIncorrect = () => {
    this.setState({
      counter: this.state.counter + 1,
      mode:'Answer',
     })
  }

  updateMode = () => {
    {this.state.mode === 'Answer'
      ? this.setState({ mode: 'Question' })
      : this.setState({mode:'Answer'})
    }
  }

  render () {
    const questions = this.props.questions
    const max= questions.length
    let mode = this.state.mode
    let counter = this.state.counter
    let score = this.state.score

    if(this.state.counter<max){
      return (
        <View style={styles.container}>
            <Text >{counter+1}/{max}</Text>
            {this.state.mode === 'Answer'
              ?<Text style={styles.title}>{questions[counter].question}</Text>
              :<Text style={styles.title}>{questions[counter].answer}</Text>
            }
            <Text style={styles.qa} onPress={this.updateMode}>{mode}</Text>
            <MyButton  stylebtn={{backgroundColor:'green',borderColor:'green'}}  onPress={this.pressCorrect}>Correct</MyButton>
            <MyButton stylebtn={{backgroundColor:'red', borderColor:'red'}}  onPress={this.pressIncorrect}>Incorrect</MyButton>
        </View>
      )
    }
    else{
      return (
        <View style={styles.containerTitle}>
            <Text style={styles.title}>You have {getPercent(score,max)}% of good answers.</Text>
            <MyButton onPress={() => this.props.navigation.dispatch(NavigationActions.back())}>
              Back to Deck
            </MyButton>
            <MyButton onPress={this.reinitState}>
              Restart Quiz
            </MyButton>
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
  },
  containerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  },
  title: {
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
  },
  qa:{
    color: 'red',
    fontSize: 15,
    fontWeight:'bold',
  },
})

// Map state to props
const mapStateToProps = (state,{ navigation }) => {
  const { deck } = navigation.state.params
  if(deck){
    return {
      title: deck.title,
      questions: deck.questions,
    }
  }

}


export default connect(mapStateToProps)(QuizView);
