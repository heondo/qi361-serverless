import React from 'react'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {onGoogleButtonPress} from '@api'

import {Text, ThemeContainer} from '@atoms'

export function SignInOptions() {
  return (
    <ThemeContainer>
      <TouchableOpacity onPress={onGoogleButtonPress}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </ThemeContainer>
  )
}
