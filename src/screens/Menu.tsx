import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {Col, EmptySpace, MenuContainer, Text, ThemeContainer} from '@atoms'
import {SignInOptions, ProfileBanner} from '@organisms'
import {RootTabParamList} from '@types'
import {useAppSelector} from '@store'

type MenuScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: MenuScreenNavigationProp
}

export function Menu({navigation}: Props) {
  const user = useAppSelector(state => state.auth.user)

  return (
    <ThemeContainer>
      <MenuContainer>
        <Col>
          {/* ternary to show sign in options or users profile section. */}
          {user ? <ProfileBanner user={user} /> : <SignInOptions />}
        </Col>
        <EmptySpace />
        <Text>This is where I could show the logout</Text>
        <Text>{JSON.stringify(user)}</Text>
      </MenuContainer>
    </ThemeContainer>
  )
}
