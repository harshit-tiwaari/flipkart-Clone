import {useEffect} from 'react'
import Navbar from './Navbar'
import Slide from './slide'
import {Box,styled} from '@mui/material'
import Banner from './Banners'
import { getProducts } from '../../redux/actions/productAction'
import {useDispatch,useSelector} from 'react-redux'
import {Fragment} from 'react' //it is denoted by <>
import MidSlide from './MidSlide'
//Fragment has its use in  not creating extra node and its faster than div
const Component=styled(Box)`
  padding:10px 10px;
  background:#F2F2F2;
`
//5.W use useSelector from react redux which returns value from a state here getProducts.
const Home = () => {
  const { products } = useSelector(state => state.getProducts);
    //object destructuring IMP!
  console.log(products)
   //this getProduct is inside the redux store not the function below
  const dispatch = useDispatch();
  useEffect(() => { 
    dispatch(getProducts()) //1.first of all this use-effect will be called  and then dispatched getProduct and call this api from productaction.
  },[dispatch])
  return (
    <> 
    <Navbar />
      {/* //you cannot return two parents components(navbar nd banner) together in jsx.SO we need to wrap it by returning only just one parent component. USING DIV COMPONENT.So div is parent component now and navbar and banner are child component*/}
      <Component>
  <Banner/> 
        <MidSlide products={products} title="Deal of the day" timer={true} />
        <Slide products={products} title="Discounts for You" timer={false } />
        <Slide products={products} title="Suggested Items" timer={false } />
        <Slide products={products} title="Top Selection" timer={false } />
        <Slide products={products} title="Recommended items" timer={false } />
        <Slide products={products} title="Trending Offers" timer={false }  />
        <Slide products={products} title="Season's Top picks" timer={false }  />
        <Slide products={products} title="Top Deals on Accessories" timer={false } />
  
      </Component>
  
    </>
  )
}
export default Home;