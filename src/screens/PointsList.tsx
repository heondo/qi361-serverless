import {RouteProp} from '@react-navigation/core'
import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'

import {ThemeContainer, TouchableOpacity} from '../components/atoms'
import {MainStackParamList, RootTabParamList} from '../types/navigation'

type PointsScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type PointsListScreenRouteProp = RouteProp<MainStackParamList, 'PointsList'>

type Props = {
  route: PointsListScreenRouteProp
  navigation: PointsScreenNavigationProp
}

export function PointsList({route, navigation}: Props) {
  const keyExtractor = (item: any, index) => index

  console.log(route.params.id)

  const renderItem = ({item}) => (
    <ListItem bottomDivider>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Main', {
            screen: 'PointsList',
            params: {
              id: item.meridianID,
              header: item.english,
            },
          })
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.english}</ListItem.Title>
          <ListItem.Subtitle>{item.english}</ListItem.Subtitle>
        </ListItem.Content>
      </TouchableOpacity>
      <ListItem.Chevron />
    </ListItem>
  )

  return (
    <ThemeContainer>
      <FlatList keyExtractor={keyExtractor} renderItem={renderItem} />
    </ThemeContainer>
  )
}
