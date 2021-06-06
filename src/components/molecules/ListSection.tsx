import React from 'react'

import {Icon, ListHeader, Row, Text, View} from '@atoms'
import {colors} from '@constants'

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
          <Row
            key={lrt.name + lrt.icon}
            pd="8px 0px"
            mg="4px 0"
            justifyContent="space-between">
            <Row>
              <Icon
                name={lrt.icon}
                color={colors.gray['300']}
                size={16}
                mg="0 16px 0 0"
              />
              <Text color={colors.gray['300']} fontSize="13px">
                {lrt.name}
              </Text>
            </Row>
            <View>
              <Icon name="right" size={12} color={colors.gray['300']} />
            </View>
          </Row>
        ))}
      </View>
    </View>
  )
}
