import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

export function Detail({route, navigation}) {
  const {item} = route.params
  const {name, home, species} = item
  return (
    <View>
      <Text>Detail Screen</Text>
      <View>
        <Text>Name: {name}</Text>
        <Text>Home Planet: {home}</Text>
        <Text>Species: {species}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  )
}
