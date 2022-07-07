import { styled } from '@mui/material'
import { BoxUpper } from '../../shared/BoxUpper'
import { BoxBodyContainer, RawBox } from './styled'

const StyledBoxBodyContainer = styled(BoxBodyContainer)({
    height: '245px',
    backgroundImage: 'url("/assets/images/bank.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
})

const Banking = () => {
    return (
        <RawBox>
            <BoxUpper title='بانکداری' />
            <StyledBoxBodyContainer>
            </StyledBoxBodyContainer>
        </RawBox>
    )
}

export default Banking