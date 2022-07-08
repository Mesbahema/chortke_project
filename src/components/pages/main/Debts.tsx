import { Avatar, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import BasicMenu from '../../shared/BasicMenu'
import { BoxUpper } from '../../shared/BoxUpper'
import { BoxBodyContainer, PriceComponent, RawBox, StyledAvatar } from './styled'




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


const Debts = () => {
    const theme = useTheme()
    return (
        <RawBox>
            <BoxUpper Option={BasicMenu} title='بدهکاری' />
            <StyledBoxBodyContainer>
                <TotalDeptContainer>
                    <PriceComponent price="۳,۴۴۴,۳۳" color={theme.palette.success.main} />
                </TotalDeptContainer>
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
    gridTemplateColumns: '16% 36% 44%',
    gridGap: '10px',
    justifyContent: 'space-between',
    height: '70px',
    padding: '15px 24px',
    border: `2px solid ${theme.palette.disabled.light}`
}))
const DebitCardItem = styled("div")(({ theme }) => ({
    width: '100%',
    height: '100%'
}))
const PriceItem = styled(DebitCardItem)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center'
}))
const CustomerItem = styled(DebitCardItem)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly'
}))
const RoleSection = styled(Typography)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.shape.borderRadius,
    width: '50px',
    padding: '5px'
}))





const DebitCard = () => {
    const theme = useTheme()
    return (
        <DebitCardContainer>
            <DebitCardItem>
                <StyledAvatar src="/assets/images/avatar.svg" />
            </DebitCardItem>
            <CustomerItem>
                <Typography>
                ۰۰۰۱-امبر هرد
                </Typography>
                <RoleSection variant="caption" color={theme.palette.primary.main} textAlign="center">
                    مشتری
                </RoleSection>
            </CustomerItem>
            <PriceItem>
                <PriceComponent price="۳,۴۴۴,۳۳" color={theme.palette.text.main} />
            </PriceItem>
        </DebitCardContainer>
    )
}

export default Debts