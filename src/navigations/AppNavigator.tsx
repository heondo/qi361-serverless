import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {Home} from '../screens/Home'
import {Detail} from '../screens/Detail'
import {Settings} from '../screens/Settings'
import {Profile} from '../screens/Profile'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#101010',
        style: {
          backgroundColor: '#ffd700',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
            backgroundColor: '#101010',
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTintColor: '#ffd700',
          headerBackTitleVisible: false,
        }}
        headerMode="float">
        <Stack.Screen
          name="Home"
          component={MainTabNavigator}
          options={({route}) => ({
            title: route.name,
          })}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({route}) => ({
            title: route.name,
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({route}) => ({
            title: route.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
