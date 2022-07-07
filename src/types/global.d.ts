import React from 'react'
import { themeObj } from '../components/provider/ThemeProvider'

declare global {
    type ChildrenPropType = { children: React.ReactNode }
    type ThemeObjType = typeof themeObj
}