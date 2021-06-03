import React from 'react'
import {FlatList} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {ListItem, Avatar, Button} from 'react-native-elements'

import {RootStackParamList} from '../types/navigation'
import {Container} from '../components/atoms/layout'
import {PrimaryButton, TouchableOpacity} from '../components/atoms/button'

import GROUP_DATA, {MeridianDataType} from '../data/groupData'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
type Props = {
  navigation: MainScreenNavigationProp
}

export function Home(props: Props) {
  const {navigation} = props

  const keyExtractor = item => item.meridianID

  const renderItem = ({item}: {item: MeridianDataType}) => (
    <ListItem bottomDivider>
      <TouchableOpacity>
        <ListItem.Content>
          <ListItem.Title>{item.english}</ListItem.Title>
          <ListItem.Subtitle>{item.english}</ListItem.Subtitle>
        </ListItem.Content>
      </TouchableOpacity>
      <ListItem.Chevron />
    </ListItem>
  )

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={GROUP_DATA}
      renderItem={renderItem}
    />
  )
}
