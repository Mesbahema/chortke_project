
import { Box, Grid, Typography, useTheme } from "@mui/material"
import { styled } from "@mui/system"
import BasicSelect from "../../shared/BasicSelect"
import { BoxUpper } from "../../shared/BoxUpper"
import { BoxBodyContainer, RawBox } from "./styled"

const FlexBox = styled('div')({
    display: 'flex',
})
const UpperSectionContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
})
const LowerSectionContainer = styled('div')({
    // backgroundColor: '#3800003b',
    gridTemplateColumns: 'repeat(auto-fill, 40%)',
    justifyContent: 'space-around',
    gridGap: '15px'
})
const StyledBoxBodyContainer = styled(BoxBodyContainer)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'

})

const ProfitAndLoss = () => {
    const theme = useTheme()
    return (
        <RawBox>
            <BoxUpper Option={BasicSelect} title='نمودار درآمد هزینه' />
            <StyledBoxBodyContainer>
                <UpperSectionContainer>
                    <FlexBox>
                        <Typography color={theme.palette.success.main} variant="h5">
                            ۳,۴۴۴,۳۳
                        </Typography>
                        <Typography color={theme.palette.disabled.main}>
                            &nbsp;
                            ریال
                        </Typography>
                    </FlexBox>
                    <Typography color={theme.palette.disabled.main}>
                        ۰۰/۲/۳
                    </Typography>
                </UpperSectionContainer>
                <LowerSectionContainer>
                    <Grid container >
                        <Grid item xs={6}>
                            <PriceItem title='فروش' color={theme.palette.error.main} />
                        </Grid>
                        <Grid item xs={6}>
                            <PriceItem title='خرید' color={theme.palette.primary.main} />
                        </Grid>
                        <Grid item xs={6}>
                            <PriceItem title='درآمد' color={theme.palette.success.main} />
                        </Grid>
                        <Grid item xs={6}>
                            <PriceItem title='هزینه' color={theme.palette.warning.main} />
                        </Grid>
                    </Grid>
                </LowerSectionContainer>
            </StyledBoxBodyContainer>

        </RawBox>
    )
}

const PriceItemContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: '15px 24px',
})

const PriceItem = ({ title, price, color }: { title?: string, price?: string, color?: string }) => {
    const theme = useTheme()
    return (
        <PriceItemContainer>
            <Typography color={color}>
                {title}
            </Typography>
            <Box sx={{ padding: '5px' }} />
            <FlexBox>
                <Typography variant="h6">
                    ۳,۴۴۴,۳۳
                </Typography>
                <Typography color={theme.palette.disabled.main}>
                    &nbsp;
                    ریال
                </Typography>
            </FlexBox>
        </PriceItemContainer>
    )
}

export default ProfitAndLoss