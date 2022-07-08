import { Grid } from '@mui/material'
import { styled } from '@mui/system'
import Banking from './Banking'
import BarChartComponent from './BarChartComponent'
import Checkouts from './Checkouts'
import Cheques from './Cheques'
import Debts from './Debts'
import LinChartComponent from './LinChartComponent'
import PieChartComponent from './PieChartComponent'
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
          <Debts />
        </Grid>
        <Grid item xs={4}>
          <Checkouts />
        </Grid>
        <Grid item xs={4}>
          <Cheques />
        </Grid>
        <Grid item xs={4}>
          <Cheques />
        </Grid>
        <Grid item xs={4}>
          <PieChartComponent />
        </Grid>
        <Grid item xs={8}>
          <LinChartComponent />
        </Grid>
      </Grid></MainContainer >
  )
}

export default MainPage