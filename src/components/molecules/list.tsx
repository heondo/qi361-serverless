import React from 'react'
import {ListBadgeContainer, ListBadgeText} from '@atoms'

export const ListBadge = ({
  children,
}: {
  children: string | React.ReactElement
}) => {
  return (
    <ListBadgeContainer>
      {typeof children === 'string' ? (
        <ListBadgeText>{children}</ListBadgeText>
      ) : (
        children
      )}
    </ListBadgeContainer>
  )
}
