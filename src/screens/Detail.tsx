import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/core'
import {RootStackParamList} from '../types/navigation'

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>
type DetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Detail'
>
type Props = {
  route: DetailScreenRouteProp
  navigation: DetailScreenNavigationProp
}

export function Detail(props: Props) {
  const {route, navigation} = props
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
