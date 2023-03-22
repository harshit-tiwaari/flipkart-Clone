import logo from './logo.svg';

//components
import Header from './components/header/Header'
import Home from './components/home/Home'
 
import{Box} from '@mui/material'
  //routing:1 u want to move out of folder so then '../' means u r out from source folder
   //2 :folder is in same folder './' means in folder
function App() {
  return (
    <div >
      <Header />
      <Box Style={{marginTop:54}}>

     
        <Home />
         </Box>
    </div>
  );
}

export default App;
