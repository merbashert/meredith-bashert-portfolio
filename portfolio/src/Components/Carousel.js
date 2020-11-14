import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import '../index.css'

const CarouselContainer = (props) => {

    return (
        <Carousel interval={false} slide={false} wrap={false}>
            {props.project.project.map((x, j) => {
                return <Carousel.Item key={j}>
                    <img
                        src={x.photo}
                        alt={x.project}
                        className="slide"
                        />
                    <Carousel.Caption>
                        <p>{x.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>
    )

}

export default CarouselContainer
