import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Settings} from '@screens'
import {SettingsStackParamList} from '@types'
import {createHeaderColors} from '@utils'

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
