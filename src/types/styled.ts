import React from 'react'
import {ThemeType} from '@constants'

export interface BaseProps {
  w?: string
  h?: string
  mg?: string
  pd?: string
  pos?: string
  color?: string
  fontSize?: string
  justifyContent?: string
  alignItems?: string
  position?: 'left' | 'right'
  theme: ThemeType
  children?:
    | (React.ReactElement | string | null)[]
    | (React.ReactElement | string | null)
  // add string if text element causing issues
}
