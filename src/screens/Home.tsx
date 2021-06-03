import React from 'react'
import {FlatList} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {ListItem, Theme} from 'react-native-elements'
import {ThemeProvider} from 'styled-components'

import {RootStackParamList} from '../types/navigation'
import {TouchableOpacity} from '../components/atoms/button'

import GROUP_DATA, {MeridianDataType} from '../data/groupData'

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>
type Props = {
  navigation: MainScreenNavigationProp
}

const theme: Theme = {
  Button: {
    raised: true,
  },
  ListItemTitle: {
    style: {
      color: 'white',
    },
  },
}

export function Home(props: Props) {
  const {navigation} = props

  const keyExtractor = item => item.meridianID

  const renderItem = ({item}: {item: MeridianDataType}) => (
    <ThemeProvider theme={theme}>
      <ListItem bottomDivider containerStyle={{backgroundColor: '#23272e'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PointsList', {id: item.meridianID})
          }}>
          <ListItem.Content>
            <ListItem.Title>{item.english}</ListItem.Title>
            <ListItem.Subtitle>{item.english}</ListItem.Subtitle>
          </ListItem.Content>
        </TouchableOpacity>
        <ListItem.Chevron />
      </ListItem>
    </ThemeProvider>
  )

  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={GROUP_DATA}
      renderItem={renderItem}
    />
  )
}
