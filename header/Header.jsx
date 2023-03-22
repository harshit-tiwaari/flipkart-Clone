import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material'
//components 
import Search from './Search'
import CustomButton from './CustomButton'
const StyledHeader = styled(AppBar)`
   background:#2874f0
   height:55px;
   `  //remember back tick   //lower and camel case?
const Component = styled(Box)`
   margin-left:12%;
   line-height:0

`
const Subheading = styled(Typography)`
font-size:10px
font-style:italic
`
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginleft:4
  
  
})//here string element is used in img as it is an html element

const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;

`

function Header() {
  //box is replacement of div// //used curly braces as it is a variable
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:55}}>
        <Component>

          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{display:'flex'}}> 
                                        {/* display flex make all component in one staright line */}
            <Subheading>Explore&nbsp;
              <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
              {/* here span is used so that our plus element is in same line of explore */}
              
            </Subheading>
            <PlusImage src={ subURL} alt="sub-Logo" />
          </Box> 
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton/>
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}
export default Header