import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {RootTabParamList} from '../types/navigation'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  return (
    <View>
      <Text>Settings</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Main', {
            screen: 'Home',
          })
        }>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}
