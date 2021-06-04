import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {Col, EmptySpace, SettingsContainer, Text, ThemeContainer} from '@atoms'
import {SignInOptions, ProfileBanner} from '@organisms'
import {RootTabParamList} from '@types'
import {useAppSelector} from '@store'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  const user = useAppSelector(state => state.auth.user)

  return (
    <ThemeContainer>
      <SettingsContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          {user ? <ProfileBanner user={user} /> : <SignInOptions />}
        </Col>
        <EmptySpace />
        <Text>{JSON.stringify(user)}</Text>
      </SettingsContainer>
    </ThemeContainer>
  )
}
