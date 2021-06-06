import {NavigatorScreenParams} from '@react-navigation/native'

export type RootTabParamList = {
  Main: NavigatorScreenParams<MainStackParamList>
  Menu: NavigatorScreenParams<MenuStackParamList>
}

export type MainStackParamList = {
  Home: undefined
  PointsList: {id: string; header: string; points: string[]}
  DetailsSwiper: {
    pointID: string
    meridianPoints: string[]
  }
}

export type MenuStackParamList = {
  Menu: undefined
}
