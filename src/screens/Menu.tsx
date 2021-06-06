import React from 'react'
import {StackNavigationProp} from '@react-navigation/stack'

import {
  Col,
  EmptySpace,
  MenuContainer,
  Text,
  ThemeContainer,
  Row,
  Icon,
} from '@atoms'
import {ListRowType, ListSection} from '@molecules'
import {SignInOptions, ProfileBanner} from '@organisms'
import {RootTabParamList} from '@types'
import {useAppSelector} from '@store'

type MenuScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: MenuScreenNavigationProp
}

export function Menu({navigation}: Props) {
  const user = useAppSelector(state => state.auth.user)

  const topSection = user ? <ProfileBanner user={user} /> : <SignInOptions />

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
      action: () => {
        console.log('do something, probably navigate to a different place')
      },
      icon: 'flag',
    },
    {
      name: 'Privacy Policy',
      action: () => {
        console.log('do something, probably navigate to a different place')
      },
      icon: 'lock',
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

        <Text>This is where I could show the logout</Text>
      </MenuContainer>
    </ThemeContainer>
  )
}
