import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
  Home: BottomTabNavigationProp<HomeTabParamList>
  Settings: undefined
  Detail: undefined
}

export type HomeTabParamList = {
  Home: undefined
  Profile: undefined
}
