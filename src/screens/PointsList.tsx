import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {POINTS_DATA} from '../../static/data/pointData'

import {
  FlatList,
  ListItemButton,
  ListItemText,
  Row,
  ListItemContainer,
  ThemeContainer,
} from '../components/atoms'
import {ListBadge} from '../components/molecules'
import {MainStackParamList, RootTabParamList} from '../types'

type PointsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type PointsListScreenRouteProp = RouteProp<MainStackParamList, 'PointsList'>

type Props = {
  route: PointsListScreenRouteProp
  navigation: PointsScreenNavigationProp
}

export function PointsList({route, navigation}: Props) {
  const keyExtractor = (item: any, index: number) => item
  const {points} = route.params

  const renderItem = ({item}: {item: string | any}) => {
    const point = POINTS_DATA[item]
    return (
      <ListItemContainer>
        <ListItemButton
          onPress={() => {
            navigation.navigate('Main', {
              screen: 'DetailsSwiper',
              params: {
                pointID: item,
                meridianPoints: points,
              },
            })
          }}>
          <Row justifyContent="space-between">
            <Row>
              <ListBadge>{item.split('-')[1]}</ListBadge>
              <ListItemText>{point.english}</ListItemText>
            </Row>
          </Row>
        </ListItemButton>
      </ListItemContainer>
    )
  }

  return (
    <ThemeContainer>
      <FlatList
        keyExtractor={keyExtractor}
        data={points}
        renderItem={renderItem}
      />
    </ThemeContainer>
  )
}
