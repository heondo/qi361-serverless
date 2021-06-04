import React from 'react'
import {User} from '@types'
import {Row, Text, ThemeContainer} from '@atoms'

type Props = {
  user: User
}

export function ProfileBanner({user}: Props) {
  return (
    <ThemeContainer>
      <Row width="100%" justifyContent="space-between">
        <Text>profile banner made</Text>
        <Text>profile banner made</Text>
      </Row>
    </ThemeContainer>
  )
}
