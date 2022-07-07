import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import Banking from './Banking'
import BarChartComponent from './BarChartComponent'
import ProfitAndLoss from './ProfitAndLoss'

const MainContainer = styled('div')(({ theme }) => ({
  marginTop: '40px'
}))

const MainPage = () => {
  return (
    <MainContainer>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <BarChartComponent />
        </Grid>
        <Grid item xs={4}>
          <ProfitAndLoss />
        </Grid>
        <Grid item xs={4}>
          <Banking />
        </Grid>
        <Grid item xs={4}>
          <ProfitAndLoss />
        </Grid>
        <Grid item xs={4}>
          <ProfitAndLoss />
        </Grid>
      </Grid></MainContainer >
  )
}

export default MainPage