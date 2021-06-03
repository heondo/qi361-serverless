import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {Detail} from '../screens/Detail'
import {PointsList} from '../screens/PointsList'
import {Home} from '../screens/Home'
import {MainStackParamList} from '../types/navigation'

const Stack = createStackNavigator<MainStackParamList>()

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
