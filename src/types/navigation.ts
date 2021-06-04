import {NavigatorScreenParams} from '@react-navigation/native'

export type RootTabParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Settings: NavigatorScreenParams<SettingsStackParamList>
}

export type MainStackParamList = {
  Home: undefined
  PointsList: {id: string; header: string; points: string[]}
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
