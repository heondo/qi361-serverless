import * as React from 'react'
import {View} from 'react-native'
import {ListItem} from '../atoms'

export const ListItemContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return <ListItem>{children}</ListItem>
}
