import React from 'react'
import {GestureResponderEvent} from 'react-native'

import {
  Icon,
  ListHeader,
  Row,
  Text,
  ThemeContainer,
  TouchableOpacity,
  View,
} from '@atoms'
import {colors} from '@constants'

export type ListRowType = {
  icon: string
  action: (event: GestureResponderEvent) => void
  name: string
}

type Props = {
  header: string
  data: ListRowType[]
}

// could update children to instead, a list of items and their actions if any.

export function ListSection({header, data}: Props) {
  return (
    <ThemeContainer>
      <View w="100%">
        <ListHeader>{header}</ListHeader>
        <View>
          {data.map(lrt => (
            <TouchableOpacity
              key={lrt.name + lrt.icon}
              onPress={lrt.action}
              pd="8px 0px">
              <Row mg="4px 0" justifyContent="space-between">
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
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ThemeContainer>
  )
}
