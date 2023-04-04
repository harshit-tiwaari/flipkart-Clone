import {LocalOffer as Badge } from '@mui/icons-material';
import { Typography, Box, styled ,Table,TableBody,TableRow,TableCell} from '@mui/material'

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';


const SmallText = styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
  font-size:14px;
  margin-Top:10px;


}
`
const styledBadge = styled(Badge)`
margin-right:10px;
color: #00CC00;
font-size:15px;
`

const ColumnText = styled(  TableRow)`
font-size:14px;
&>td{
  font-size:14px;
  margin-top:10px;
  boder:none;
}

`

const ProductDeatil = ({ product }) => {
  const date=new Date(new Date().getTime()+(5*24*60*60*1000))
  return (
    <>
      <Typography> {product.title.longTitle}</Typography>
              <Typography style={{marginTop:5,color:'#878787',fontSize:14}}> 8 Ratings & 1 Reviews
                <Box component='span'><img src={fassured} style={ {width:77,marginLeft:20}} /></Box>
              </Typography>
      <Typography> 
         <Box component="span" style={{ fontsize: 28 }}>{product.price.cost}</Box> &nbsp; &nbsp; &nbsp;               
                {/* //nbsp gives u space and use it with ; */}
                <Box component="span" style={{color:'#878787'}}><strike>₹{ product.price.mrp}</strike></Box> &nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color:'#388E3C'}}>{ product.price.discount}</Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography><Badge/>Get extra 20%off upto ₹50 on 1 items(S) T&C</Typography>
        <Typography> <Badge/> Get extra 13% off (price inclusive of discount) T&C </Typography>
        <Typography><Badge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card Worth ₹100 know more</Typography>
        <Typography><Badge/>Buy 2 items save 5%;Buy 3 or more save 10% T&C</Typography>
        <Typography><Badge/> 5% Cashback on Flipkart Axis Bank Card</Typography>
        <Typography> <Badge />No cost EMI on Bajaj Finserv EMI CARD on cart value above ₹2999</Typography>
        
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{color:'#878787'}}>Deliever</TableCell>
            <TableCell style={{fontWeight:600}}>Deliever By {date.toDateString()} | ₹40</TableCell> 
            {/* //toDateString convert the date into readible date */}
          </ColumnText>
           <ColumnText>
            <TableCell style={{color:'#878787'}}>Waranty</TableCell>
            <TableCell > No Waranty</TableCell> 
            
          </ColumnText>

          <ColumnText>
           <TableCell>
            <Box component="span" style={{ color: '#2874f0' }}>SuparComNet</Box>
            <Typography> GST invoice available</Typography>
              <Typography>View more Sellars from ₹{product.price.cost}</Typography>
              </TableCell>
           
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2} >
            <img src={adURL} style={{width:390}} alt='FlipkartPoints' />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{'color':'#878787'}}>Description</TableCell>
           <TableCell>No Warranty</TableCell>
         
          </ColumnText>
          
        </TableBody>
      </Table>
    
    
    </>
  )

}

export default ProductDeatil;