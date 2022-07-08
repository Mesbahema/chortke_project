import { styled } from '@mui/material'
import PieChart from '../../base/charts/PieChart'
import BasicSelect from '../../shared/BasicSelect'
import { BoxUpper } from '../../shared/BoxUpper'
import { RawBox } from './styled'

export const BoxBodyContainer = styled('div')(({ theme }) => ({
    height: '350px',
    display: 'grid',
    gridTemplateColumns: '100%',
}))

const PieChartComponent = () => {
    return (
        <RawBox>
            <BoxUpper title='بیشترین فروش' Option={BasicSelect}/>
            <BoxBodyContainer>
                <PieChart/>
            </BoxBodyContainer>
        </RawBox>
    )
}

export default PieChartComponent