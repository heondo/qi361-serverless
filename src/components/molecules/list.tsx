import * as React from 'react'
import {BaseProps} from '../../types/styled'
import {ListItem, ListBadgeContainer, ListBadgeText} from '../atoms'

export const ListItemContainer = ({children}: BaseProps) => {
  return <ListItem>{children}</ListItem>
}

export const ListBadge = ({text}: {text: string}) => {
  return (
    <ListBadgeContainer>
      <ListBadgeText>{text}</ListBadgeText>
    </ListBadgeContainer>
  )
}
