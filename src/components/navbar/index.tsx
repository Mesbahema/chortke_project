import { Button, styled, Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import BanckIcon from '../../assets/icons/BankIcon'
import ClockIcon from '../../assets/icons/ClockIcon'
import DashboardIcon from '../../assets/icons/DashboardIcon'
import PlusIcon from '../../assets/icons/PlusIcon'

const TitleSectionContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '24px 0 50px 0'
})
const TitleItem = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})
const FlexBox = styled('div')({
  display: 'flex',
})
const DashboardButtonContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: '200px',
  justifyContent: 'right'
})
const BankButton = styled(Button)(({theme}) =>({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: theme?.shape?.borderRadius,
  width: '100px',
  height: '100px',
  marginRight: '40px',
  justifyContent: 'space-evenly',
}))
//TODO: background needs to be setup
const AddAccountButton = styled(BankButton)(({theme}) =>({
  borderWidth: '3px',
  borderColor: theme.palette.disabled.main,
  borderStyle: 'dashed',
  backgroundSize: '30px 30px',
}))

const Navbar = () => {
  const { palette: { text } } = useTheme()
  return (
    <>
      <Typography gutterBottom color={text.disabled} variant='body1'>
        شنبه،   ۱۲ اردیبهشت ۱۴۰۱
      </Typography>
      <TitleSectionContainer>
        <TitleItem>
          <FlexBox>
            <Typography gutterBottom color={text.primary} variant='h5'>
              به&nbsp;
            </Typography>
            <Typography gutterBottom color='primary' variant='h5'>
              چرتکه&nbsp;
            </Typography>
            <Typography gutterBottom color={text.primary} variant='h5'>
              خوش آمدید!
            </Typography>
          </FlexBox>
          <Typography gutterBottom color={text.secondary} variant='body1'>
            نرم افزار حسابداری با کاربری آسان که می توانید در کمترین زمان آن را راه اندازی کنید!
          </Typography>
        </TitleItem>
        <TitleItem>
          <FlexBox>
            <ClockIcon />
            <Typography gutterBottom color='error' variant='body1'>
              &nbsp;اشتراک آزمایشی تمام شد
            </Typography>
          </FlexBox>
          <Typography textAlign='right' gutterBottom color='primary' variant='body1'>
            خرید اشتراک
          </Typography>
        </TitleItem>
      </TitleSectionContainer>
      <DashboardButtonContainer>
        <Button sx={{
          padding: '8px', borderWidth: '2px', '&:hover': {
            borderWidth: '2px'
          }
        }} color='disabled' variant='outlined'>
          <DashboardIcon />
          &nbsp;
          ویرایش داشبورد
        </Button>
      </DashboardButtonContainer>
      <Typography sx={{ marginBottom: '20px' }} fontWeight='bold' color={text.primary}>
        دسترسی سریع
      </Typography>
      <FlexBox>
        <BankButton>
          <BanckIcon />
          <Typography color='primary' variant='body1'>
            حساب ها
          </Typography>
        </BankButton>
        <BankButton>
          <BanckIcon />
          <Typography color='primary' variant='body1'>
            حساب ها
          </Typography>
        </BankButton>
        <AddAccountButton>
          <PlusIcon/>
        </AddAccountButton>
      </FlexBox>
    </>
  )
}

export default Navbar