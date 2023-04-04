import {Box,Button,styled} from '@mui/material'

import { ShoppingCart as Cart,FlashOn as Flash } from '@mui/icons-material';
import FlashOnIcon from '@mui/icons-material/FlashOn'

const LeftContainer = styled(Box)(({ theme }) =>({
  minWidth:'40%',
  padding:'40px 0 0 80px',
  [theme.breakpoints.down('md')]:{
  padding:'20px 40px'

  }
}));
  

const Image = styled('img')({
  width: '95%',
  padding:'15px'
})
const StyledButton = styled(Button)`
 width:48%;
 height:50px;
 border-radius:2px
`
const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box style={{border:'1px solid #f0f0f0',
  width: '95%'}} >
<Image src={product.detailUrl} alt='product'/>
      </Box>
      
      <StyledButton variant='contained' style={{marginRight:10,background:'#ff9f00'}}>Add to Cart</StyledButton>
      <StyledButton variant='contained' style={{background:'#fb541b'}}> <Flash/>Buy Now</StyledButton>
   </LeftContainer>
  )

}
export default ActionItem 