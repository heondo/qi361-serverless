import React from 'react'
import {ThemeType} from '@constants'

export interface BaseProps {
  w?: string
  h?: string
  mg?: string
  pd?: string
  fontSize?: string
  justifyContent?: string
  alignItems?: string
  position?: 'left' | 'right'
  theme: ThemeType
  children?: React.ReactElement | React.ReactElement[] | string | string[]
  // add string if text element causing issues
}
