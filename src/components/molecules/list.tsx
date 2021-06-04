import React from 'react'
import {ListBadgeContainer, ListBadgeText} from '../atoms'

export const ListBadge = ({children}: {children: string}) => {
  return (
    <ListBadgeContainer>
      <ListBadgeText>{children}</ListBadgeText>
    </ListBadgeContainer>
  )
}
