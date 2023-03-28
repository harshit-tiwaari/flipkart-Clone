//To simultaneously changing login and signup change we have to make a state which can be stated as True or False.
import { useState,useContext } from 'react'
import { authenticateSignup,authenticateLogin } from '../../service/api'
import { DataContext } from '../../context/DataProvider';
import { Dialog, Box, TextField, Button, styled, Typography } from '@mui/material'
// here 'vh' is used for dialog box here v= viewport
const Component = styled(Box)`
    height:78vh;
    width:75vh;

`
const Image = styled(Box)`
 background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png
) center 85% no-repeat;
 
 height:83%;
 width:28%;
 padding:45px 35px;
 margin-right:40px;
 &>p,&>h5{
  color:#FFFFFF;
  font-weight:600;

 }
`
const Wrapper = styled('Box')`
display:flex;
flex-direction:column;
pading:25px 35px;
margin-right:15px;
flex:1;
& >div,& >Button,& >p{
  margin-top:20px;
  
}
`
const LoginButton = styled(Button)`
  text-transform:none;
  background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`
const RequestOTP = styled(Button)`
  text-transform:none;
  background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/20%);
`
const Text = styled(Typography)`
 font-size:12px;
 color:#878787;
 `
const CreateAccount = styled(Typography)`
  font-size:14px;
  text-align:center;
  color:#2874f0;
  font-weight:600;
  cursor:pointer;
`
const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-weight:600;
`
const accountInitialvalues = {
  login: {
    view: 'login',
    heading: "Login",
    subHeading:"Get access to your Orders,whishlist and Recommendations"
    

  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subHeading:"Sign up with your mobile number to get started",
  }
}
const signupInitialValues = {
  firstname: " ",
  lastname: " ",
  username: " ",
  email: " ",
  password: " ",
  phone:" "
}
const loginInitialValues = {
  username: '',
  password:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialvalues.login)
  const [signup,setSignup]=useState(signupInitialValues)
 const[login,setLogin]=useState(loginInitialValues)
  const {setAccount } = useContext(DataContext);
 const[error,setError]=useState(false)//as we dont want that "please enter username and password show everytime.It must only when we write invalid username"
  const toggleSignup = () => {
    toggleAccount(accountInitialvalues.signup)
  }
  const handleclose = () => {
    setOpen(false);
    toggleAccount(accountInitialvalues.login)
    setError(false);
  }
  
  
  const onInputChange = (e) => {
    setSignup({...signup,[e.target.name]:e.target.value}); //the value is in e in target folder with value variable.ALSO e.target.name is a variable so thats why we have to write this under a square bracket as it is used as key.
    }

  const signupUser = async() => {
    let response = await authenticateSignup(signup);
    console.log(response);
    if (!response) return;
    handleclose();//close the dialog and set login on
    //now we need to move state from login to header so we can do two things:1.Lifting the state Or make context API.Sp we r building context api
    setAccount(signup.firstname);
  }

  const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  }
  //that will login on click on button
  const loginUser = async () => {
    
    let response=await authenticateLogin(login);//how to get to know if a function is synchronus or not
    console.log(response)
    if (response.status == 200) {
      handleclose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  }

//paperprops is used to set a fized height wieght of dialog box
  return (
    <Dialog open={open} onClose={handleclose}>
      <Component>
        <Box style={{display:'flex',height:'100%'}} PaperProps={{sx:{maxwidth:"unset"}}}> 
        {/* //left hand side component */}
          <Image>
           
            <Typography varient="h5">{account.heading} </Typography>
            <Typography style={{ marginTop: 20 }}>{ account.subHeading}</Typography>
          </Image> 
          {/* Right hand side component */}
          {
              account.view==='login' ? //why 3 equals to?
            
              <Wrapper>
                {/* the value we gain is from event so we passed e as an argument */}
                <TextField variant="standard" onChange={(e) => onValueChange(e)} name="username" label="Enter Username" /> 
                {error && <Error>Please enter valid username and password</Error>}
                <TextField variant="standard" onChange={(e)=>onValueChange(e) } name="password" label="Enter Password" />
              <Text> By continuing you agree to Flipkart's Terms of the use and Privacy POlicy</Text>
              <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: 'center' }}>OR</Typography>
              <RequestOTP>Request OTP</RequestOTP>
                <CreateAccount onClick={ ()=>toggleSignup()}>New to Flipkart? CREATE AN ACCOUNT</CreateAccount>

              
           
            </Wrapper>
            :
            <Wrapper>
             <TextField variant="standard" onChange={(e)=>onInputChange(e) } name="firstname" label="Enter Firstname" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e) } name="lastname" label="Enter Lastname" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e) } name="username" label="Enter Username" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e) } name="email" label="Enter Email" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e) } name="password" label="Enter Password" />
                <TextField variant="standard" onChange={(e)=>onInputChange(e) }name="phone" label="Enter Mobile NO" />
                
              
                <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
              
           
            </Wrapper>
          }
         
         </Box>
         
      </Component>
     
 </Dialog>
)

}
export default LoginDialog;