import React, {useEffect, useState} from 'react'
import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import Swiper from 'react-native-swiper'

import {Container, Text, ThemeContainer} from '../components/atoms'
import {MainStackParamList, RootTabParamList} from '../types/navigation'
import {LoggedOutDetails} from '../components/organisms/LoggedOutDetails'

type DetailsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>
type DetailsSwiperScreenRouteProp = RouteProp<
  MainStackParamList,
  'DetailsSwiper'
>

type Props = {
  route: DetailsSwiperScreenRouteProp
  navigation: DetailsScreenNavigationProp
}

export function DetailsSwiper({navigation, route}: Props) {
  const {pointID, meridianPoints} = route.params

  const initialIndex = Number(pointID.split('-')[1]) - 1

  // // if logged in
  // const loggedInOutMap = () => true

  return (
    <ThemeContainer>
      <Swiper
        loadMinimal={true}
        showsButtons={false}
        loop={false}
        showsPagination={false}
        index={initialIndex}>
        {meridianPoints.map(p => (
          <LoggedOutDetails key={p} pointID={p} navigation={navigation} />
        ))}
      </Swiper>
    </ThemeContainer>
  )
}
