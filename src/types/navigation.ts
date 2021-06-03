import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

export type RootStackParamList = {
  Main: BottomTabNavigationProp<MainTabParamList>
  Settings: undefined
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
