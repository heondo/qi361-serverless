import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Settings} from '../screens/Settings'
import {SettingsStackParamList} from '../types/navigation'
import {createHeaderColors} from '../utils/colors'

const Stack = createStackNavigator<SettingsStackParamList>()

export function SettingsStackNavigator() {
  const colorScheme = 'dark' // useColorScheme()

  const headerColors = createHeaderColors(colorScheme)

  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        gestureEnabled: true,

        headerStyle: {
          backgroundColor: headerColors.bg,
        },
        headerTintColor: headerColors.color,
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
