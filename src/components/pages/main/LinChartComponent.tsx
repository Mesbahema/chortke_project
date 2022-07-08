import { styled } from '@mui/system'
import React from 'react'
import LineChart from '../../base/charts/LineChart'
import BasicSelect from '../../shared/BasicSelect'
import { BoxUpper } from '../../shared/BoxUpper'
import { RawBox } from './styled'

const BoxBodyContainer = styled('div')(({ theme }) => ({
    height: '350px',
    display: 'grid',
    gridTemplateColumns: '100%',
}))

const LinChartComponent = () => {
  return (
    <RawBox>
            <BoxUpper title='بیشترین فروش' Option={BasicSelect}/>
            <BoxBodyContainer>
                <LineChart/>
            </BoxBodyContainer>
        </RawBox>
    )
  }

export default LinChartComponent