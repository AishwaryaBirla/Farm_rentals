import React from 'react';
import { Carousel, CarouselItem} from 'react-bootstrap';
import {CarouselCaption} from 'reactstrap';
import img1 from './../../Assets/images/equipListCarousel1.png';
import img4 from './../../Assets/images/equipListCarousel4.png';
import img3 from './../../Assets/images/equipListCarousel3.png';

const EquipListCarousel = () =>{
    return(
    <>
    <Carousel>
  <CarouselItem interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1>Cheaper Payments</h1>
    <p><h3>Compared to a standard loan or huge principal that is involved in buying the product, renting the equipment is much cheaper, which makes it easy for small and local farmers to afford.</h3></p>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem interval={500}>
    <img
      className="d-block w-100"
      src={img4}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </CarouselItem>
  <CarouselItem>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </CarouselItem>
</Carousel>
    </>
    );
}

export default EquipListCarousel;

