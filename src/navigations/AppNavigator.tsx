import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Home} from '../screens/Home'
import {Detail} from '../screens/Detail'
import {Settings} from '../screens/Settings'
import {Profile} from '../screens/Profile'

import {RootStackParamList, MainTabParamList} from '../types/navigation'

const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator<MainTabParamList>()

// Tab bar component
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

// App
export function MainStackNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
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
            name="Main"
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
    </SafeAreaProvider>
  )
}
