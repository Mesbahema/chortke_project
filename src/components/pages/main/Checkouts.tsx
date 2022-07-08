import { Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import BasicSelect from '../../shared/BasicSelect'
import { BoxUpper } from '../../shared/BoxUpper'
import { BoxBodyContainer, FlexBox, PriceComponent, RawBox } from './styled'
import LinearProgress from '@mui/material/LinearProgress';

const CheckoutContainer = styled(BoxBodyContainer)({
    height: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
})
const Checkouts = () => {
    return (
        <CheckoutContainer>
            <CheckoutsItems title='فاکتور خرید' />
            <CheckoutsItems title='فاکتور فروش' />
        </CheckoutContainer>
    )
}

const StyledBoxBodyContainer = styled(BoxBodyContainer)({
    minHeight: 'unset'
})
const UpperDetails = styled('div')({
    display: 'flex',
    justifyContent: 'space-between'
})
const CheckoutsItems = ({ title }: { title: string }) => {
    const theme = useTheme()
    return (
        <RawBox>
            <BoxUpper Option={BasicSelect} title={title} />
            <StyledBoxBodyContainer>
                <UpperDetails>
                    <FlexBox>
                        <Typography variant="body2" color={theme.palette.disabled.main}>
                            کل
                            &nbsp;
                        </Typography>

                        <PriceComponent price="۳,۴۴۴,۳۳" color={theme.palette.text.main} />
                    </FlexBox>
                    <FlexBox>
                        <Typography variant="body2" color={theme.palette.disabled.main}>
                            دریافت شده
                            &nbsp;
                        </Typography>

                        <PriceComponent price="۳,۴۴۴,۳۳" color={theme.palette.text.main} />
                    </FlexBox>
                </UpperDetails>
                <Box sx={{ padding: '10px' }} />
                <LinearProgress variant='determinate' value={30} />
                <Box sx={{ padding: '10px' }} />
                <UpperDetails>
                    <Box sx={{ padding: '10px' }} />
                    <FlexBox>
                        <Typography variant="body2" color={theme.palette.text.secondary}>
                            سررسید گذشته
                            &nbsp;
                        </Typography>

                        <PriceComponent price="۳,۴۴۴,۳۳" color={theme.palette.text.secondary} />
                    </FlexBox>
                </UpperDetails>
            </StyledBoxBodyContainer>
        </RawBox>
    )
}

export default Checkouts