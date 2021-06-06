import React from 'react'
import {Linking} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'

import {Col, EmptySpace, MenuContainer, Text, ThemeContainer} from '@atoms'
import {ListRowType, ListSection, LogoutButton} from '@molecules'
import {SignInOptions, ProfileBanner} from '@organisms'
import {RootTabParamList} from '@types'
import {useAppSelector} from '@store'

type MenuScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: MenuScreenNavigationProp
}

export function Menu({navigation}: Props) {
  const user = useAppSelector(state => state.auth.user)

  const topSection = user ? <ProfileBanner user={user} /> : null

  const aboutList: ListRowType[] = [
    {
      name: 'FAQ',
      action: () => {
        console.log('do something, probably navigate')
      },
      icon: 'question',
    },
    {
      name: 'Need Help?',
      action: async () =>
        await Linking.openURL('mailto:heondokim@gmail.com?subject=Qi361 Help'),
      icon: 'flag',
    },
    {
      name: 'Privacy Policy',
      action: async () => await Linking.openURL('https://www.heondokim.com'),
      icon: 'lock',
    },
    {
      name: 'View in app store',
      action: async () =>
        await Linking.openURL('market://details?id=com.ecwid.android'),
      icon: 'appstore-o',
    },
  ]

  return (
    <ThemeContainer>
      <MenuContainer>
        <Col>
          {/* Signed in or out options */}
          {topSection}
          <ListSection header="ABOUT" data={aboutList} />
        </Col>
        <EmptySpace />
        {user ? <LogoutButton /> : <SignInOptions />}
      </MenuContainer>
    </ThemeContainer>
  )
}
