import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {useColorScheme} from 'react-native-appearance'

import {Detail} from '../screens/Detail'
import {PointsList} from '../screens/PointsList'
import {Home} from '../screens/Home'
import {MainStackParamList} from '../types/navigation'
import {createHeaderColors} from '../utils/colors'

const Stack = createStackNavigator<MainStackParamList>()

export function HomeStackNavigator() {
  let colorScheme = useColorScheme()

  const headerColors = createHeaderColors(colorScheme)

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: headerColors.bg,
        },
        headerTitleStyle: {
          color: headerColors.color,
          fontWeight: 'bold',
        },
      }}
      headerMode="float">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          title: route.name,
        })}
      />
      <Stack.Screen
        name="PointsList"
        component={PointsList}
        options={({route}) => ({
          title: `${route.params.id}`,
        })}
      />

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
