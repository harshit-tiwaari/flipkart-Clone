//To simultaneously changing login and signup change we have to make a state which can be stated as True or False.
import { useState } from 'react'
import { authenticateSignup } from '../../service/api'

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
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone:""
}
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialvalues.login)
  const [signup,setSignup]=useState(signupInitialValues)
  const toggleSignup = () => {
    toggleAccount(accountInitialvalues.signup)
  }
  const handleclose = () => {
    setOpen(false);
    toggleAccount(accountInitialvalues.login)
  }
  const signupUser = () => {
      
  }
  
  const onInputChange = (e) => {
    setSignup({...signup,[e.target.name]:e.target.value}); //the value is in e in target folder with value variable.ALSO e.target.name is a variable so thats why we have to write this under a square bracket as it is used as key.
    console.log(signup);
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
              account.view=='login' ?
            
              <Wrapper>
                {/* the value we gain is from event so we passed e as an argument */}
                <TextField variant="standard"  label="Enter Email/Mobile Number" /> 
                <TextField variant="standard"  label="Enter Password" />
              <Text> By continuing you agree to Flipkart's Terms of the use and Privacy POlicy</Text>
              <LoginButton>Login</LoginButton>
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