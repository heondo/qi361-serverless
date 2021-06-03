import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Detail} from '../screens/Detail'
import {Settings} from '../screens/Settings'
import {PointsList} from '../screens/PointsList'
import {Home} from '../screens/Home'

const Stack = createStackNavigator()

// App
export function HomeStackNavigator() {
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
        name="Home"
        component={Home}
        options={({route}) => ({
          title: route.name,
        })}
      />
      <Stack.Screen name="PointsList" component={PointsList} />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.name,
        })}
      />
    </Stack.Navigator>
  )
}
