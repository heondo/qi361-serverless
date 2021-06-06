import React from 'react'

import {Icon, ListHeader, Row, Text, View} from '@atoms'

type ListRowType = {
  icon: string
  action: Function
  name: string
}

type Props = {
  header: string
  data: ListRowType[]
}

// could update children to instead, a list of items and their actions if any.

export function ListSection({header, data}: Props) {
  return (
    <View w="100%">
      <ListHeader>{header}</ListHeader>
      <View>
        {data.map(lrt => (
          <Row key={lrt.name + lrt.icon}>
            <Icon
              name={lrt.icon}
              color="white"
              size={16}
              pd="4px"
              mg="0 6px 0 0"
            />
            <Text>{lrt.name}</Text>
          </Row>
        ))}
      </View>
    </View>
  )
}
