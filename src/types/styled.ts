import React from 'react'
import {ThemeType} from '../constants/theme'

export interface BaseProps {
  width?: string
  height?: string
  justifyContent?: string
  alignItems?: string
  position?: 'left' | 'right'
  theme?: ThemeType
  children?: React.ReactElement | React.ReactElement[]
}
