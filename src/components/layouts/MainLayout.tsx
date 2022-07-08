import { Container, styled } from '@mui/material'
import Navbar from '../navbar'

const Footer = styled('div')(({ theme }) => ({
  padding: '50px'
}))

const MainLayout = ({ children }: ChildrenPropType) => {
  return (
    <>
      <Container sx={{ paddingTop: '50px' }} maxWidth="xl">
        <Navbar />
        {children}</Container>
      <Footer />
    </>
  )
}

export default MainLayout