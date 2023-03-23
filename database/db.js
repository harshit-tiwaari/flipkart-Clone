import mongoose from 'mongoose';

export const connection = async(username,password) => {
  const URL=`mongodb+srv://${username}:${password}@ECOMMERCE-WEB.rs9evmj.mongodb.net/ecommerce-web?retryWrites=true&w=majority`
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }) //FIRST argument of connect is url and other is object.As connect is asynchronus function so u have to wait for promise so use async await.
    console.log("Database is Connected Successfully")
  } catch (error) {
    console.log("Server is down",error.message)
  } //try and couch as the server may be down its not in our hand so we have to show it using try and catch.

}
export default connection