
import { Box,styled,Typography} from '@mui/material';
import { navData } from '../../constants/data';
const Component = styled(Box)`
display:flex;
margin:76px 130px 0 130px;
justify-content:space-between ;
`
const Container = styled(Box)`
padding: 12px 8px;
text-align:center;

`
//typography make margin and padding betwen text and image zero hwereas p tag has some.
const Text = styled(Typography)`
 font-size:14px;
 font-weight:600;
 font-family:inherit;
`
const Navbar = () => {
  //components import
  
  return (
    
    <Component>{
      navData.map(data => ( //here choose normal bracket not the curly ones
        
        <Container>
          <img src={data.url} alt="nav" style={ {width:64}} />
          <Text>{ data.text}</Text>
          </Container>
      ))
      
      }

    </Component>
  )
}
export default Navbar;