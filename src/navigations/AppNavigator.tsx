import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {HomeStackNavigator} from './HomeStack'
import {SettingsStackNavigator} from './SettingsStack'
// import {a} from 'react-native-vector-icons'

import colors from '../constants/colors'
import {RootTabParamList} from '../types/navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

// App
export function MainStackNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.red['400'],
            style: {
              backgroundColor: colors.gray['800'],
            },
          }}>
          <Tab.Screen
            name="Main"
            component={HomeStackNavigator}
            options={{
              // tabBarIcon:
              title: 'Home',
            }}
          />
          <Tab.Screen name="Settings" component={SettingsStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
