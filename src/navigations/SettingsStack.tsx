import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Settings} from '../screens/Settings'
import {SettingsStackParamList} from '../types/navigation'

const Stack = createStackNavigator<SettingsStackParamList>()

export function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: 'lightgrey',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTintColor: 'black',
        headerBackTitleVisible: false,
      }}
      headerMode="float">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({route}) => ({
          title: 'Settings',
        })}
      />
    </Stack.Navigator>
  )
}
