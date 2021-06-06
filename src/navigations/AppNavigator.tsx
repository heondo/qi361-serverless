import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {HomeStackNavigator} from './HomeStack'
import {MenuStackNavigator} from './MenuStack'
import auth from '@react-native-firebase/auth'

import {colors} from '@constants'
import {RootTabParamList} from '@types'
import {cleanUserObject} from '@utils'

import {useAppDispatch, thunkLogin} from '@store'
import {Icon} from '@atoms'

const Tab = createBottomTabNavigator<RootTabParamList>()

// App
export function MainStackNavigator() {
  const dispatch = useAppDispatch()

  // firebase auth lifecycle hook
  function onAuthStateChanged(u: any) {
    const payload = cleanUserObject(u)
    if (payload) {
      dispatch(thunkLogin(payload))
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])
  // firebase auth lifecycle hook - end

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: colors.red['400'],
            style: {
              backgroundColor: colors.gray['800'],
              paddingBottom: 2,
              paddingTop: 2,
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
            name="Menu"
            component={MenuStackNavigator}
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
              title: 'Menu',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
