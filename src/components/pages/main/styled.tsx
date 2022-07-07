import { styled } from "@mui/system";

export const RawBox = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    borderRadius: theme.shape.borderRadius,
    minHeight: '350px'
}))
export const BoxBodyContainer = styled('div')(({ theme }) => ({
    padding: '15px 24px',
    height: '100%'
}))

