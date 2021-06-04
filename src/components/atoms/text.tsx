import styled from 'styled-components/native'
import {ThemeType} from '../../constants/theme'

export const Text = styled.Text`
  color: ${(props: {theme: ThemeType}) => props.theme.text.primary};
`
