import React from 'react'

import {ListHeader, Text, View} from '@atoms'

type Props = {
  header: string
  children: React.ReactElement[] | React.ReactElement
}

// could update children to instead, a list of items and their actions if any.

export function ListSection({header, children}: Props) {
  return (
    <View w="100%">
      <ListHeader>{header}</ListHeader>
      <View>{children}</View>
    </View>
  )
}
