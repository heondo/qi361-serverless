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
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
})
