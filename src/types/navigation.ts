import {NavigatorScreenParams} from '@react-navigation/native'
import {PointType} from './meridians'

export type RootTabParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Settings: NavigatorScreenParams<SettingsStackParamList>
}

export type MainStackParamList = {
  Home: undefined
  PointsList: {id: string; header: string; points: string[]}
  DetailsSwiper: {
    pointData: PointType
    meridianPoints: string[]
  }
}

export type SettingsStackParamList = {
  Settings: undefined
}
