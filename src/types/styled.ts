import React from 'react'
import {ThemeType} from '@constants'

export interface BaseProps {
  w?: string
  h?: string
  mg?: string
  pd?: string
  color?: string
  fontSize?: string
  justifyContent?: string
  alignItems?: string
  position?: 'left' | 'right'
  theme: ThemeType
  children?: React.ReactNode
  // add string if text element causing issues
}
