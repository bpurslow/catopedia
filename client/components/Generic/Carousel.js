/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'

import SlickCarousel from 'react-slick';

class Carousel extends React.Component{
    // Carousel that implements slick carousel component with passed through children

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 768, settings: { slidesToShow: 1 } },
                { breakpoint: 1160, settings: { slidesToShow: 2 } }
            ]
        };
        return(
            <SlickCarousel {...settings}>
                {React.Children.map(this.props.children, child => {
                    return <div>{child}</div>
                })}
            </SlickCarousel>
        )
    }
}

export default Carousel