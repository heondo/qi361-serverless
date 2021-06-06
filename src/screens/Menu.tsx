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
import {SignInOptions, ProfileBanner} from '@organisms'
import {RootTabParamList} from '@types'
import {useAppSelector} from '@store'
import {ListSection} from '@molecules'

type MenuScreenNavigationProp = StackNavigationProp<RootTabParamList, 'Main'>

type Props = {
  navigation: MenuScreenNavigationProp
}

export function Menu({navigation}: Props) {
  const user = useAppSelector(state => state.auth.user)

  const topSection = user ? <ProfileBanner user={user} /> : <SignInOptions />

  return (
    <ThemeContainer>
      <MenuContainer>
        <Col>
          {/* Signed in or out options */}
          {topSection}
          <ListSection header="ABOUT">
            <Row>
              <Icon
                name="home"
                color="white"
                size={16}
                pd="4px"
                mg="0 6px 0 0"
              />
              <Text>Option 1</Text>
            </Row>
            {/* <Text pd="6px">Option 1</Text>
            <Text pd="6px">Option 2</Text>
            <Text pd="6px">Option 3</Text> */}
          </ListSection>
        </Col>
        <EmptySpace />

        <Text>This is where I could show the logout</Text>
      </MenuContainer>
    </ThemeContainer>
  )
}
