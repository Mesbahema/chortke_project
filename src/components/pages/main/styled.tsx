import { Avatar, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/system";

export const RawBox = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
}))
export const BoxBodyContainer = styled('div')(({ theme }) => ({
    padding: '15px 24px',
    minHeight: '350px',
}))

export const FlexBox = styled('div')({
    display: 'flex',
})

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: '100%',
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.disabled.main}`
}))


export const PriceComponent = ({color, price}: {color: string, price: string}) => {
    const theme = useTheme()
    return (
        <FlexBox>
            <Typography variant="body1" color={color}>
                {price}
            </Typography>
            <Typography variant="body2" color={theme.palette.disabled.main}>
                &nbsp;
                ریال
            </Typography>
        </FlexBox>
    )
}

