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
                        {
                            x.caption ?
                            <Carousel.Caption>
                                <h4>{x.caption}</h4>
                            </Carousel.Caption>
                            :
                            null
                        }

                </Carousel.Item>
            })}
        </Carousel>
    )

}

export default CarouselContainer
