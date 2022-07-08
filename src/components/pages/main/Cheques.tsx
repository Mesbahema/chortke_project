import { Avatar, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import BasicMenu from '../../shared/BasicMenu'
import { BoxUpper } from '../../shared/BoxUpper'
import { BoxBodyContainer, FlexBox, PriceComponent, RawBox, StyledAvatar } from './styled'




const StyledBoxBodyContainer = styled(BoxBodyContainer)(({ theme }) => ({
    padding: 0,
    overflow: 'auto',
    height: '350px'
}))
export const TotalDeptContainer = styled("div")(({ theme }) => ({
    // backgroundColor: '#F2F2F2',
    backgroundColor: theme.palette.disabled.light,
    padding: '15px 24px',
}))


const Cheques = () => {
    const theme = useTheme()
    return (
        <RawBox>
            <BoxUpper Option={BasicMenu} title='چک های دریافتی' />
            <StyledBoxBodyContainer>
                <DebitCard />
                <DebitCard />
                <DebitCard />
                <DebitCard />
                <DebitCard />
                <DebitCard />
            </StyledBoxBodyContainer>
        </RawBox>
    )
}

const DebitCardContainer = styled("div")(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '16% 36% 48%',
    justifyContent: 'space-between',
    height: '70px',
    padding: '15px 24px',
    border: `2px solid ${theme.palette.disabled.light}`
}))
const DebitCardItem = styled("div")(({ theme }) => ({
    width: '100%',
    height: '100%'
}))
const MiddleItem = styled(DebitCardItem)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
}))

const PriceItem = styled(MiddleItem)(({ theme }) => ({
    alignItems: 'end'
}))

const DebitCard = () => {
    const theme = useTheme()
    return (
        <DebitCardContainer>
            <DebitCardItem>
                <StyledAvatar src="/assets/images/bankAvatar.svg" />
            </DebitCardItem>
            <MiddleItem>
                <PriceComponent price="۵۰٬۰۰۰٬۰۰۰" color={theme.palette.text.main} />
                <FlexBox>
                    <Typography variant="caption" color={theme.palette.text.main}>
                        ملاصدرا
                    </Typography>
                    <Typography variant="caption" color={theme.palette.disabled.main}>
                        &nbsp;
                        ۳۷۶۳۲۸
                    </Typography>
                </FlexBox>
            </MiddleItem>
            <PriceItem>
                <Typography variant="caption" color={theme.palette.disabled.main}>
                    ۰۱/۱۲/۲۸
                </Typography>
                <Typography variant="body2">
                    ایلان ماسک
                </Typography>
            </PriceItem>
        </DebitCardContainer>
    )
}

export default Cheques