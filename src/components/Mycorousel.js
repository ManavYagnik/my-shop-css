import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Mycorousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (

        <div className='banner' style={{ "text-align": "center" }} >
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1200}
                rewind={true}
                rewindWithAnimation={true}
                showDots={true}>

                <div><img src='images/corousel/1.png' alt='img' style={{ "width": "100%" }} />  </div>
                <div><img src='images/corousel/2.png' alt='img' style={{ "width": "100%" }} /> </div>
                <div><img src='images/corousel/3.png' alt='img' style={{ "width": "100%" }} /> </div>
                <div><img src='images/corousel/4.png' alt='img' style={{ "width": "100%" }} /> </div>
                <div><img src='images/corousel/5.png' alt='img' style={{ "width": "100%" }} /> </div>
                <div><img src='images/corousel/6.png' alt='img' style={{ "width": "100%" }} /> </div>


            </Carousel>;

        </div>
    )
}

export default Mycorousel;