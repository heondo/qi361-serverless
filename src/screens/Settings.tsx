import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {onGoogleButtonPress} from '../api/auth'
import {
  Col,
  EmptySpace,
  SettingsContainer,
  Text,
  ThemeContainer,
  TouchableOpacity,
} from '../components/atoms'
import {SignInOptions} from '../components/organisms'
import {RootTabParamList} from '../types/navigation'
import {useAppDispatch, useAppSelector} from '../store/hooks'
import {thunkLogout} from '../store/user/userSlice'

type SettingsScreenNavigationProp = StackNavigationProp<
  RootTabParamList,
  'Main'
>

type Props = {
  navigation: SettingsScreenNavigationProp
}

export function Settings({navigation}: Props) {
  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  return (
    <ThemeContainer>
      <SettingsContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          {user ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(thunkLogout())
              }}>
              <Text>Youre in</Text>
            </TouchableOpacity>
          ) : (
            <SignInOptions />
          )}
        </Col>
        <EmptySpace />
        <Text>{JSON.stringify(user)}</Text>
      </SettingsContainer>
    </ThemeContainer>
  )
}
