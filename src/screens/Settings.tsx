import {StackNavigationProp} from '@react-navigation/stack'
import React from 'react'
import {onGoogleButtonPress} from '../api/auth'
import {
  Col,
  Container,
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
      <Container>
        <Col>
          <SignInOptions />
          <SignInOptions />
        </Col>
        {/* {signIn} */}
        {/* <TouchableOpacity onPress={handleGoogleSignIn}>
          <Text>Hello</Text>
        </TouchableOpacity> */}
      </Container>
    </ThemeContainer>
  )
}
