import * as React from 'react'
import styled, {ThemeProvider} from 'styled-components/native'
import {ThemeProvider as RneThemeProvider} from 'react-native-elements'
// import {useColorScheme} from 'react-native-appearance'
import {themes, ThemeType} from '../../constants/theme'
import {View} from './container'
import {BaseProps} from '../../types/styled'
import LinearGradient from 'react-native-linear-gradient'

export const Row = styled(View)`
  display: flex;
  flex-direction: row;
  width: auto;
  align-items: center;
  justify-content: ${(props: BaseProps) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`

export const Col = styled(View)`
  display: flex;
  width: auto;
  justify-content: ${(props: BaseProps) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
`

export const LinearGradientContainer = styled(LinearGradient)`
  padding: 8px;
  width: 45px;
  height: 45px;
  margin: ${(props: BaseProps) =>
    props.position === 'right' ? '0 0 0 14px' : '0 14px 0 0'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
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
