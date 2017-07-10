/**
 * Created by benpurslow on 07/07/2017.
 */
import React from 'react'


class Carousel extends React.Component{

    render() {
        return(
            <section className="carousel">
                <div className="carousel__left">

                </div>
                <div className="carousel__items">
                    {this.props.children}
                </div>
                <div className="carousel__right">

                </div>
            </section>
        )
    }
}

export default Carousel