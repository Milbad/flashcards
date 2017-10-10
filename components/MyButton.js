import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function MyButton ({ children, onPress, display, style = {} , stylebtn={}}) {

  return (
    <TouchableOpacity disabled={display} style={[styles.btn, stylebtn]}  onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color:'white',
    fontSize: 22,
    fontWeight:'bold',
  },
  btn:{
    backgroundColor: 'black',
    padding: 10,
    borderColor:'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 7,
    height: 45,
    margin:20,
    width:200,
  },
})
