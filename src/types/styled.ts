import React from 'react'
import {ThemeType} from '@constants'

export interface BaseProps {
  width?: string
  height?: string
  mg?: string
  pd?: string
  justifyContent?: string
  alignItems?: string
  position?: 'left' | 'right'
  theme: ThemeType
  children?: React.ReactElement | React.ReactElement[]
}
