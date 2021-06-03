import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootTabParamList} from '../types/navigation'

type DetailScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: DetailScreenNavigationProp
}

export function Detail({route, navigation}: Props) {
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Settings', {
            screen: 'Settings',
          })
        }>
        <Text>Go to Settings</Text>
      </TouchableOpacity>
    </View>
  )
}
