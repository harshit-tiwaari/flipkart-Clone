import {Box,Button,Typography,styled} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//make sure to take object like wrapper starting from capital letter.
const Wrapper=styled(Box)` 
display:flex;
margin: 0 3% 0 auto;
&>button,&>p,&>div{
  margin-right:40px;
  font-size:16px;
  align-items:Center;
}


`
//ek line me lane k liye:we did display flex.
const Container = styled(Box)`
display:flex; 

`
const LoginButton=styled(Button)`
color:#2874f0;
background:#fff;
text-transform:None;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600
height:32px;
`
const CustomButton = () => {
  
  return (
    
    <Wrapper>
{/* //by default button is text so we did variant */}
      <LoginButton variant="contained"> Login</LoginButton>
      <Typography style={{marginTop:5,width:135}}> 
        Become a Seller
      </Typography >
      <Typography style={{marginTop:3}} >
        More
      </Typography>
      <Container>
        <ShoppingCartIcon/>
        <Typography>
         cart
        </Typography>

      </Container>
      </Wrapper>
     
  )
}
export default CustomButton