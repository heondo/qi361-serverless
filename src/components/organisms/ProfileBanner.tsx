import React from 'react'
import {User} from '@types'
import {Capitalized, Row, Text, ThemeContainer, UserAvatar, View} from '@atoms'

type Props = {
  user: User
}

export function ProfileBanner({user}: Props) {
  return (
    <ThemeContainer>
      <>
        <Row w="100%">
          {/* <View>{user.photoURL}</View> */}
          <UserAvatar
            source={{
              uri: user.photoURL,
            }}
          />
          <View>
            <Text>
              Thank you for using Qi 361,{' '}
              <Capitalized>{user.displayName}</Capitalized>
            </Text>
            <Text>Signed in via: {user.authProvider}</Text>
          </View>
        </Row>
        <Row w="100%" justifyContent="space-between">
          <Text>profile banner made</Text>
          {/* <Text>profile banner made</Text> */}
        </Row>
      </>
    </ThemeContainer>
  )
}
