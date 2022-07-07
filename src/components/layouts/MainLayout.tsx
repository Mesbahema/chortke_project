import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../navbar'

const MainLayout = ({children}: ChildrenPropType) => {
  return (
    <Container sx={{paddingTop: '50px'}} maxWidth="xl">
      <Navbar/>
      {children}</Container>
  )
}

export default MainLayout