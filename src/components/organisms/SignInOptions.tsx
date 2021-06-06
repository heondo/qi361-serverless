import React from 'react'

import {onGoogleButtonPress} from '@api'
import {FadedText, Icon, OutlinedButton, Row, ThemeContainer} from '@atoms'

export function SignInOptions() {
  return (
    <ThemeContainer>
      <OutlinedButton onPress={onGoogleButtonPress}>
        <Row w="100%" justifyContent="center">
          <Icon name="google" size={16} mg="0 6px 0 0" />
          <FadedText>LOGIN</FadedText>
        </Row>
      </OutlinedButton>
    </ThemeContainer>
  )
}
