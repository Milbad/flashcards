import React from 'react'
import { Constants } from 'expo'
import { View, StatusBar } from 'react-native'

export default function StatusBarBlack ({backgroundColor,color, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor}  color={color} {...props} />
    </View>
  )
}
