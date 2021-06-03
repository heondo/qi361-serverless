// import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
// import {StackNavigationProp} from '@react-navigation/stack'
import {NavigatorScreenParams} from '@react-navigation/native'

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>
  Settings: undefined
  PointsList: {
    id: string
  }
  Detail: {
    item: {
      name: string
      home: string
      species: string
    }
  }
}

export type MainTabParamList = {
  Home: undefined
  Profile: undefined
}
