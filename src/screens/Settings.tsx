import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {onGoogleButtonPress} from '../api/auth'
import {
  Col,
  EmptySpace,
  SettingsContainer,
  Text,
  ThemeContainer,
} from '../components/atoms'
import {SignInOptions} from '../components/organisms'
import {RootTabParamList} from '../types/navigation'
import {decrement, increment} from '../store/counter/counterSlice'
import {useAppDispatch, useAppSelector} from '../store/hooks'

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
      await onGoogleButtonPress()
    } catch (err) {
      console.error(err)
    }
  }

  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <ThemeContainer>
      <SettingsContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          <SignInOptions />
        </Col>
        <EmptySpace />
        <Text>{count}</Text>
      </SettingsContainer>
    </ThemeContainer>
  )
}
