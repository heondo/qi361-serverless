import React from 'react'
import styled, {ThemeProvider} from 'styled-components/native'
import {ThemeProvider as RneThemeProvider} from 'react-native-elements'

import {View} from './container'
import {themes, ThemeType} from '../../constants'
import {BaseProps} from '../../types'

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  /* flex: 1; */
  align-items: center;
  justify-content: ${(props: BaseProps) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`

export const Col = styled(View)`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: ${(props: BaseProps) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-items: center;
`

export const EmptySpace = styled(View)`
  flex: 1;
`

export const ThemeContainer = ({children}: {children: React.ReactElement}) => {
  // let colorScheme = useColorScheme()
  // TODO: Permanently dark, light theme after one color set up done.
  // Replace with above to start testing with light  mode setup
  const colorScheme = 'dark'
  return (
    <ThemeProvider theme={themes[colorScheme]}>
      <RneThemeProvider
        useDark={colorScheme === 'dark'}
        theme={themes[colorScheme]}>
        {children}
      </RneThemeProvider>
    </ThemeProvider>
  )
}
