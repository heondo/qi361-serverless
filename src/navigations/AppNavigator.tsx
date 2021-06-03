import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {HomeStackNavigator} from './HomeStack'
import {SettingsStackNavigator} from './SettingsStack'
import {RootTabParamList} from '../types/navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

// App
export function MainStackNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#CB5254',
            style: {
              backgroundColor: 'black',
            },
          }}>
          <Tab.Screen name="Main" component={HomeStackNavigator} />
          <Tab.Screen name="Settings" component={SettingsStackNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
