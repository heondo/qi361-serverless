import React from 'react'
import {Button} from 'react-native-elements'

import {Container} from '../components/atoms/layout'

export function PointsList(props) {
  const {navigation} = props
  return (
    <Container>
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate('Settings')
        }}
      />
    </Container>
  )
}
