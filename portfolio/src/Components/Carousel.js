import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import '../index.css'

const CarouselContainer = (props) => {

    return (
        <Carousel interval={false} slide={false} wrap={false} keyboard={true}>
            {props.project.project.map((x, j) => {
                return <Carousel.Item key={j}>
                    <img
                        src={x.photo}
                        alt={x.project}
                        className="slide d-block img-fluid"
                        />
                        {
                            x.caption ?
                            <Carousel.Caption>
                                <p>{x.caption}</p>
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
