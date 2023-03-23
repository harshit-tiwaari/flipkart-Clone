import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
  id: {
  type: String,
  required: true,
    unique:true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String
});
 //in this function we can store validation
const Product = mongoose.model('product', productSchema)//collection formation here product

export default Product;

