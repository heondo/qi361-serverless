import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Menu} from '@screens'
import {MenuStackParamList} from '@types'
import {createHeaderColors} from '@utils'

const Stack = createStackNavigator<MenuStackParamList>()

export function MenuStackNavigator() {
  const colorScheme = 'dark' // useColorScheme()

  const headerColors = createHeaderColors(colorScheme)

  return (
    <Stack.Navigator
      initialRouteName="Menu"
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
        name="Menu"
        component={Menu}
        options={({route}) => ({
          title: 'Menu',
        })}
      />
    </Stack.Navigator>
  )
}
