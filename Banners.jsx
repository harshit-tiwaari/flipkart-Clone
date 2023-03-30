
import Carousel from 'react-multi-carousel';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

import { bannerData } from '../../constants/data';
const Image = styled('img')({
  width: '100%',
  height: 200


});
const Banners = () => {
  const responsive = { //responsive is here a prop
  
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return(
    <Carousel
      responsive={responsive}
       swipeable={false}
      draggable={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}//means 4 seconds
      keyBoardControl={true}
      slideToSlide={1}
       dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
    >
      {
        bannerData.map(data => (
          
          <Image src={data.url} alt="banner"/>
        ))
      }
      </Carousel>

)
}
export default Banners;