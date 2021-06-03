import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export function Settings(props) {
  const {navigation} = props
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
