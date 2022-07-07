import React from 'react'
import BarChart from '../../base/charts/BarChart'
import BasicSelect from '../../shared/BasicSelect'
import { BoxUpper } from '../../shared/BoxUpper'
import { BoxBodyContainer, RawBox } from './styled'

const BarChartComponent = () => {
    return (
        <RawBox>
            <BoxUpper Option={BasicSelect} title='نمودار درآمد هزینه' />
            <BoxBodyContainer>
                <BarChart />
            </BoxBodyContainer>
        </RawBox>
    )
}

export default BarChartComponent