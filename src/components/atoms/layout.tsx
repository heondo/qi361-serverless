import * as React from 'react'
import styled, {ThemeProvider} from 'styled-components/native'
import {ThemeProvider as RneThemeProvider} from 'react-native-elements'
// import {useColorScheme} from 'react-native-appearance'
import {themes, ThemeType} from '../../constants/theme'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: {theme: ThemeType}) =>
    props.theme.colors.primary};
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
