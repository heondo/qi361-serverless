import * as React from 'react'
import styled from 'styled-components/native'
import {ThemeProvider} from 'react-native-elements'
// import {useColorScheme} from 'react-native-appearance'

import {themes} from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #23272e;
`

export const ThemeContainer = ({children}: {children: React.ReactElement}) => {
  // let colorScheme = useColorScheme()
  // TODO: Permanently dark, light theme after one color set up done.
  // Replace with above to start testing with light  mode setup
  const colorScheme = 'dark'
  return (
    <ThemeProvider useDark={colorScheme === 'dark'} theme={themes[colorScheme]}>
      {children}
    </ThemeProvider>
  )
}
