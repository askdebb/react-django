import axios from 'axios'
import { useState, useEffect } from 'react'

import Carousel from 'react-material-ui-carousel'
import CarouselStructure from './CarouselStructure'
const CarouselSilder = () => {

    const [slides, setSlides] = useState([]);

    const fetchMunicipalImages = async() => {
      const imageURL = "http://127.0.0.1:8000";

      try {
        const response = await axios.get(`${imageURL}/municipal-images`)
        setSlides(response.data)
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }

    useEffect(() => {
      fetchMunicipalImages();
    }, [])

  return (
    <>
      <Carousel>

        {
          slides.map((slide) => (
            <CarouselStructure key={slide.id} slide={slide}/>
          ))
        }
            
      </Carousel>
    </>
  )
}

export default CarouselSilder