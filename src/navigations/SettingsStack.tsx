import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Detail} from '../screens/Detail'
import {Settings} from '../screens/Settings'
import {PointsList} from '../screens/PointsList'

const Stack = createStackNavigator()

// App
export function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
