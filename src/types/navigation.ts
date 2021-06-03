// import {BottomStackNavigationProp} from '@react-navigation/bottom-Stacks'
// import {StackNavigationProp} from '@react-navigation/stack'
import {NavigatorScreenParams} from '@react-navigation/native'

export type RootTabParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Settings: NavigatorScreenParams<SettingsStackParamList>
}

export type MainStackParamList = {
  Home: undefined
  PointsList: {id: string}
  Detail: {
    character: {
      name: string
      home: string
      species: string
    }
  }
}

export type SettingsStackParamList = {
  Settings: undefined
}
