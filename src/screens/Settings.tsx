import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {
  Col,
  EmptySpace,
  SettingsContainer,
  Text,
  ThemeContainer,
} from '../components/atoms'
import {SignInOptions, ProfileBanner} from '../components/organisms'
import {RootTabParamList} from '../types/navigation'
import {useAppSelector} from '../store/hooks'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  const user = useAppSelector(state => state.user.user)

  return (
    <ThemeContainer>
      <SettingsContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          {user ? <ProfileBanner /> : <SignInOptions />}
        </Col>
        <EmptySpace />
        <Text>{JSON.stringify(user)}</Text>
      </SettingsContainer>
    </ThemeContainer>
  )
}
