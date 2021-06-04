import {Theme} from 'react-native-elements'
import {colors} from './colors'

// const base: Theme = {
//   Button: {
//     raised: true,
//   },
// }

export type ThemeType = typeof darkTheme

const darkTheme = {
  // ...base,
  colors: {
    bg: colors.blackAlpha['900'],
    primary: colors.gray['800'],
    secondary: colors.red['500'],
    black: colors.black,
    white: colors.white,
    searchBg: colors.gray['700'],
    success: 'white',
    error: 'white',
    warning: 'white',
    divider: 'white',
  },
  text: {
    primary: colors.white,
  },
  // ListItemSubtitle: {
  //   style: {
  //     color: colors.white,
  //   },
  // },
  // ListItem: {
  //   containerStyle: {
  //     backgroundColor: colors.gray['800'],
  //   },
  // },
  // Button: {
  //   containerStyle: {
  //     backgroundColor: colors.blue['800'],
  //   },
  // },
}

export const themes = {
  // light: {
  //   ...base,
  //   colors: {primary: 'white'},
  //   ListItemSubtitle: {
  //     style: {
  //       color: colors.black,
  //     },
  //   },
  //   ListItem: {
  //     containerStyle: {
  //       backgroundColor: colors.gray['200'],
  //     },
  //   },
  //   Button: {
  //     buttonStyle: {
  //       backgroundColor: colors.blue['500'],
  //     },
  //     titleStyle: {
  //       color: 'black',
  //     },
  //   },
  // },
  dark: {
    ...darkTheme,
  },
  // 'no-preference': {
  //   ...darkTheme,
  // },
}
