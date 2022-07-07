import { styled, Typography } from '@mui/material'
import React from 'react'

export const BoxUpperContainer = styled('div')(({theme}) =>({
  display: 'flex',
  padding: '15px',
  height: '55px',
  alignItems: 'center',
  borderBottom: `solid 4px ${theme.palette.disabled.light}`,
  justifyContent: 'space-between'
}))
export const BoxUpper = ({title, Option}: {title: string, Option?: React.FC<any>}) => {
  return (
    <BoxUpperContainer>
      <Typography>
        {title}
      </Typography>
      {Option && <Option/>}
    </BoxUpperContainer>
  )
}
