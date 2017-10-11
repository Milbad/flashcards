import React, {Component} from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { addQA } from '../actions/index'
import { connect } from 'react-redux'
import MyButton from './MyButton'
import { addCardToDeck } from '../utils/helpers'

class NewQuestion extends Component {

  state = {
    question: '',
    answer:'',
  }

  submit = () => {
    let title= this.props.navigation.state.params.title
    let questions = {
      question: this.state.question,
      answer:this.state.answer,

    }
    this.props.addQA(title,questions)
    this.props.navigation.goBack()
    addCardToDeck(title, questions)
  }

  render () {
    const { question, answer } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          multiline={true}
          placeholder={'Question'}
          style={styles.input}
          value={question}
          onChangeText={(question) => this.setState({question})}
        />
        <TextInput
          multiline={true}
          placeholder={'Answer'}
          style={styles.input}
          value={answer}
          onChangeText={(answer) => this.setState({answer})}
        />
        <MyButton  display={!question || !answer} onPress={this.submit} stylebtn={!question || !answer ? styles.btninactive : styles.btnactive}>
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
    lineHeight:20,
    fontSize:20,
    borderColor:'lightgrey',
    borderWidth:1,
    borderStyle:'solid',
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

export default connect(null, {addQA})(NewQuestion);
