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
            <Row>
              <Text>Thank you for using Qi 361, </Text>
              <Capitalized>{user.displayName}</Capitalized>
            </Row>
            <Text>Signed in via {user.authProvider}</Text>
          </View>
        </Row>
      </>
    </ThemeContainer>
  )
}
