//it is used to call API through redux
import *as actionTypes from '../constants/productConstant'
import axios from 'axios'
const URL="http://localhost:8000"
 //to import all constants we use * nd give its alias name
//given below is a reducer fucntion
export const getProducts =()=> async(dispatch) => { //2. api will get data from product from mongodb in data. and then we dispatched those values and it goes to productdeducer.
  try {
    const {data} = await axios.get(`${URL}/products`) //as get api give a res
     //we dont want whole resposne object we need just data
    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data}) //important hook reducer
  } catch (error) {
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
  }
}

// let obj={
//   config: { },
//   data: [],        //actual data is here
//     headers: { },
//   status: 200,       //this is whole response object
//     message:''
// }
// obj.data
// {data}=obj
