import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/core'
import {RootStackParamList} from '../types/navigation'

type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Settings'>
type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>
type Props = {
  route: SettingsScreenRouteProp
  navigation: SettingsScreenNavigationProp
}

export function Settings(props: Props) {
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
