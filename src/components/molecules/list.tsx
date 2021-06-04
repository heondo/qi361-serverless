import * as React from 'react'
import {Text} from 'react-native'
import {ListItem} from 'react-native-elements'

export const ListItemContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return <ListItem>{{children}}</ListItem>
}
