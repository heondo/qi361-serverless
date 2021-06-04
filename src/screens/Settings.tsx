import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {onGoogleButtonPress} from '../api/auth'
import {
  Col,
  Container,
  EmptySpace,
  SettingsContainer,
  Text,
  ThemeContainer,
  TouchableOpacity,
} from '../components/atoms'
import {SignInOptions} from '../components/organisms'
import {RootTabParamList} from '../types/navigation'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  const handleGoogleSignIn = async () => {
    try {
      // console.log('hello mate')
      await onGoogleButtonPress()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <ThemeContainer>
      <SettingsContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          <SignInOptions />
        </Col>
        <EmptySpace />
        <Text>Delete your thing</Text>
      </SettingsContainer>
    </ThemeContainer>
  )
}
