import axios from 'axios';

const URL = "http://localhost:3000";
export const authenticateSignup = async(data) =>{
  try {
    //here i takes two arguments first is URL and other is body which is here a data which we take from backend. 
     return await axios.post(`$(URL)/signup`,data)
      
  } catch (error) {
    console.log("Error while calling sign up API")
  }
}