import * as React from 'react'
import {BaseProps} from '../../types/styled'
import {ListBadgeContainer, ListBadgeText} from '../atoms'

export const ListBadge = ({children}: {children: string}) => {
  return (
    <ListBadgeContainer>
      <ListBadgeText>{children}</ListBadgeText>
    </ListBadgeContainer>
  )
}
