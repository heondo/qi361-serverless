import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {onGoogleButtonPress, signout} from '../../api/auth'

import {Text, ThemeContainer, Container} from '../atoms'

export function SignInOptions() {
  return (
    <ThemeContainer>
      <TouchableOpacity onPress={onGoogleButtonPress}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </ThemeContainer>
  )
}
