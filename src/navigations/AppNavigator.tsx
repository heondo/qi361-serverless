import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import {Profile} from '../screens/Profile'

import {HomeStackNavigator} from './HomeStack'
import {SettingsStackNavigator} from './SettingsStack'

// const Stack = createStackNavigator<RootStackParamList>()
const Tab = createBottomTabNavigator()

// Tab bar component
// function MainTabNavigator() {
//   let colorScheme = useColorScheme()
//   const theme = themes[colorScheme]

//   return (
//     <ThemeProvider useDark={colorScheme === 'dark'} theme={theme}>
//       <Tab.Navigator
//         tabBarOptions={{
//           activeTintColor: '#CB5254',
//           style: {
//             backgroundColor: theme.colors.primary,
//           },
//         }}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     </ThemeProvider>
//   )
// }

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
          <Tab.Screen name="Profile" component={SettingsStackNavigator} />
        </Tab.Navigator>
        {/* <Stack.Navigator
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
          <Stack.Screen name="PointsList" component={PointsList} />

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
        </Stack.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
