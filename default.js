//it is made to show default data in database.
import {products} from "./constants/data.js"
import Product from "./model/product-schema.js"

const DefaultData = async() => {
  try { //we are using try and catch as we are fetching data which is an external entity it can have some error(may be it not satsfying our fields).
    
    await Product.insertMany(products) //it will return promise so be should write with await
    console.log("Data Imported succesfully") //if product goes into collection
  } catch (error) {
    
    console.log("Error while inserting default data", error.message)
  }
}
export default DefaultData;