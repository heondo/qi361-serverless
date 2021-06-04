import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {PointsList} from '../screens/PointsList'
import {Home} from '../screens/Home'
import {MainStackParamList} from '../types/navigation'
import {createHeaderColors} from '../utils/colors'
import {DetailsSwiper} from '../screens/DetailSwiper'

const Stack = createStackNavigator<MainStackParamList>()

export function HomeStackNavigator() {
  const colorScheme = 'dark' // useColorScheme()

  const headerColors = createHeaderColors(colorScheme)

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        headerStyle: {
          backgroundColor: headerColors.bg,
        },
        headerTintColor: headerColors.color,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      headerMode="float">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          title: 'Meridians',
        })}
      />
      <Stack.Screen
        name="PointsList"
        component={PointsList}
        options={({route}) => ({
          title: `${route.params.id} - ${route.params.header}`,
        })}
      />
      <Stack.Screen
        name="DetailsSwiper"
        component={DetailsSwiper}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  )
}
