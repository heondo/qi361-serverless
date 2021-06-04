import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import {HomeStackNavigator} from './HomeStack'
import {SettingsStackNavigator} from './SettingsStack'
// import {a} from 'react-native-vector-icons'

import colors from '../constants/colors'
import {RootTabParamList} from '../types/navigation'

const Tab = createBottomTabNavigator<RootTabParamList>()

// App
export function MainStackNavigator() {
  const renderIcon = () => <Icon name="home" />

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
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="home"
                    color={focused ? colors.red[400] : colors.gray[500]}
                    size={25}
                  />
                )
              },
              title: 'Home',
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsStackNavigator}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <Icon
                    name="setting"
                    color={focused ? colors.red[400] : colors.gray[500]}
                    size={25}
                  />
                )
              },
              title: 'Settings',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
