import Navbar from './Navbar'
import Banner from './Banners'


const Home = () => {
  return (
    <div>
    <Navbar />
    {/* //you cannot return two parents components(navbar nd banner) together in jsx.SO we need to wrap it by returning only just one parent component. USING DIV COMPONENT.So div is parent component now and navbar and banner are child component*/}
    <Banner/>
    </div>
  )
}
export default Home;