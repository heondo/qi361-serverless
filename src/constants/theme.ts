import {Theme} from 'react-native-elements'
import colors from './colors'

const base = {
  Button: {
    raised: true,
  },
}

export const themes: {
  light: Theme
  dark: Theme
} = {
  light: {
    ...base,
    colors: {primary: 'white'},
  },
  dark: {
    ...base,
    colors: {primary: colors.gray['700']},
    ListItemSubtitle: {
      style: {
        color: colors.white,
      },
    },
    ListItem: {
      containerStyle: {
        backgroundColor: colors.gray['800'],
      },
    },
  },
}
