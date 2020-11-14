import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import '../index.css'

import Menorahsauraus_1 from '../Assets/Crafts/Menorahsauraus.jpeg'
import Menorahsauraus_2 from '../Assets/Crafts/Menorahsauraus_lit.jpeg'
import Menorahsauraus_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Menorah_Texted.jpg'
import Menorahsauraus_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Menorah_Textless.jpg'
import Window_Wide from '../Assets/Crafts/Window_Wide.jpg'
import Window_Close from '../Assets/Crafts/Window_Close.jpg'
import Window_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Window_Texted.jpg'
import Window_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Window_Textless.jpg'
import Frank_1 from '../Assets/Crafts/Frank_1.jpg'
import Frank_3 from '../Assets/Crafts/Frank_3.jpg'
import Frank_4 from '../Assets/Crafts/Frank_4.jpg'
import Frank_5 from '../Assets/Crafts/Frank_5.jpg'
import Frank_6 from '../Assets/Crafts/Frank_6.jpg'
import Frank_7 from '../Assets/Crafts/Frank_7.jpg'
import Frank_8 from '../Assets/Crafts/Frank_8.jpg'
import Frank_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Frank_Texted.jpg'
import Frank_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Frank_Textless.jpg'
import Candy_Store_1 from '../Assets/Crafts/Candy_Store_1.jpeg'
import Candy_Store_2 from '../Assets/Crafts/Candy_Store_2.jpeg'
import Candy_Store_3 from '../Assets/Crafts/Candy_Store_3.jpeg'
import Candy_Store_4 from '../Assets/Crafts/Candy_Store_4.jpeg'
import Candy_Store_5 from '../Assets/Crafts/Candy_Store_5.jpeg'
import Candy_Store_6 from '../Assets/Crafts/Candy_Store_6.jpeg'
import Candy_Store_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Candy_Store_Texted.jpg'
import Candy_Store_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Candy_Store_Textless.jpg'
import Fabric_Store_1 from '../Assets/Crafts/Fabric_Store_1.jpeg'
import Fabric_Store_2 from '../Assets/Crafts/Fabric_Store_2.jpeg'
import Fabric_Store_3 from '../Assets/Crafts/Fabric_Store_3.jpeg'
import Fabric_Store_4 from '../Assets/Crafts/Fabric_Store_4.jpeg'
import Fabric_Store_5 from '../Assets/Crafts/Fabric_Store_5.jpeg'
import Fabric_Store_6 from '../Assets/Crafts/Fabric_Store_6.jpeg'
import Fabric_Store_7 from '../Assets/Crafts/Fabric_Store_7.jpeg'
import Fabric_Store_8 from '../Assets/Crafts/Fabric_Store_8.jpeg'
import Fabric_Store_9 from '../Assets/Crafts/Fabric_Store_9.jpeg'
import Fabric_Store_10 from '../Assets/Crafts/Fabric_Store_10.jpeg'
import Fabric_Store_11 from '../Assets/Crafts/Fabric_Store_11.jpeg'
import Fabric_Store_12 from '../Assets/Crafts/Fabric_Store_12.jpeg'
import Fabric_Store_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Fabric_Store_Texted.jpg'
import Fabric_Store_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Fabric_Store_Textless.jpg'
import Awkward_Moment from '../Assets/Crafts/Awkward_Moment.jpg'
import Chicken_In_Space from '../Assets/Crafts/Chicken_In_Space.jpg'
import Cow_Dating from '../Assets/Crafts/Cow_Dating.jpeg'
import Disco_Chicks from '../Assets/Crafts/Disco_Chicks.jpeg'
import Duck_Rumble from '../Assets/Crafts/Duck_Rumble.jpeg'
import Far_From_Home_2 from '../Assets/Crafts/Far_From_Home_2.jpeg'
import Far_From_Home from '../Assets/Crafts/Far_From_Home.jpg'
import home_Sweet_HOME from '../Assets/Crafts/home_Sweet_HOME.jpeg'
import Opening_Night from '../Assets/Crafts/Opening_Night.jpg'
import Partners_In_Crime from '../Assets/Crafts/Partners_In_Crime.jpg'
import Raccoon_On_Sled from '../Assets/Crafts/Raccoon_On_Sled.jpg'
import Shark_Factory from '../Assets/Crafts/Shark_Factory.jpeg'
import Skunk_Under_The_Sea from '../Assets/Crafts/Skunk_Under_The_Sea.jpg'
import Star_Crossed_Lovers from '../Assets/Crafts/Star_Crossed_Lovers.jpeg'
import The_Flying_Koalas from '../Assets/Crafts/The_Flying_Koalas.jpg'
import Through_The_Looking_Glass_Quack from '../Assets/Crafts/Through_The_Looking_Glass_Quack.jpg'
import Octopus from '../Assets/Crafts/Octopus.jpg'
import Paintings_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Paintings_Texted.jpg'
import Paintings_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Paintings_Textless.jpg'
import Mordechai_1 from '../Assets/Crafts/Mordechai_1.jpeg'
import Mordechai_2 from '../Assets/Crafts/Mordechai_2.jpeg'
import Mordechai_3 from '../Assets/Crafts/Mordechai_3.jpeg'
import Mordechai_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Mordechai_Texted.jpg'
import Mordechai_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Mordechai_Textless.jpg'
import Mini_Savory from '../Assets/Crafts/Mini_Savory.jpg'
import Mini_Sweet from '../Assets/Crafts/Mini_Sweet.jpeg'
import Red_Sweater from '../Assets/Crafts/Red_Sweater.jpg'
import White_Sweater from '../Assets/Crafts/White_Sweater.jpg'
import Miniatures_Thumbnail_Texted from '../Assets/Crafts/Thumbnail_Miniatures_Texted.jpg'
import Miniatures_Thumbnail_Textless from '../Assets/Crafts/Thumbnail_Miniatures_Textless.jpg'




const menorahsauraus = [{photo: Menorahsauraus_1}, {photo: Menorahsauraus_2}]

const window = [
    {photo: Window_Wide, caption: `My office didn't have a window, so I made one!`},
    {photo: Window_Close}
]

const fabric_store = [
    {photo: Fabric_Store_1, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_2, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_3, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_4, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_5, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_6, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_7, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_8, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_9, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_10, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_11, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_12, caption: `1:12 Scale Dollhouse Fabric Store`}
]

const frank = [
    {photo: Frank_1, caption: '18 Inch Knitted Frank-N-Furter from Rocky Horror Picture Show'},
    {photo: Frank_3, caption: 'All the pins and patches on the jacket match the ones from his jacket in the film.'},
    {photo: Frank_4, caption: 'All the pins and patches on the jacket match the ones from his jacket in the film.'},
    {photo: Frank_5, caption: 'All the pins and patches on the jacket match the ones from his jacket in the film.'},
    {photo: Frank_6, caption: 'All the pins and patches on the jacket match the ones from his jacket in the film.'},
    {photo: Frank_7, caption: 'Everybody needs glittery black heels.'},
    {photo: Frank_8, caption: 'One Boss Bitch.'}
]

const candy_store = [
    {photo: Candy_Store_1, caption: `1:12 Scale Dollhouse Candy Store`},
    {photo: Candy_Store_2, caption: `1:12 Scale Dollhouse Candy Store`},
    {photo: Candy_Store_3, caption: `1:12 Scale Dollhouse Candy Store`},
    {photo: Candy_Store_4, caption: `1:12 Scale Dollhouse Candy Store`},
    {photo: Candy_Store_5, caption: `1:12 Scale Dollhouse Candy Store`},
    {photo: Candy_Store_6, caption: `1:12 Scale Dollhouse Candy Store`},
]

const tiny_paintings = [
    {photo: Awkward_Moment, caption:`Awkward Moment`},
    {photo: Chicken_In_Space, caption:`Chicken In Space`},
    {photo: Cow_Dating, caption:`Cow Dating`},
    {photo: Disco_Chicks, caption:`Disco Chicks`},
    {photo: Duck_Rumble, caption:`Duck Rumble`},
    {photo: Far_From_Home, caption:`Far From Home`},
    {photo: Far_From_Home_2, caption:`Far From Home 2`},
    {photo: home_Sweet_HOME, caption:`home Sweet HOME`},
    {photo: Opening_Night, caption:`Opening Night`},
    {photo: Partners_In_Crime, caption:`Partners in Crime`},
    {photo: Raccoon_On_Sled, caption:`Raccoon on Sled`},
    {photo: Shark_Factory, caption:`Shark Factory`},
    {photo: Skunk_Under_The_Sea, caption:`Skunk Under the Sea`},
    {photo: Star_Crossed_Lovers, caption:`Star-Crossed Lovers`},
    {photo: The_Flying_Koalas, caption:`The Flying Koalas`},
    {photo: Through_The_Looking_Glass_Quack, caption:`Through the Looking Glass: Quack`},
    {photo: Octopus, caption: `Snack Food Juggler`}
]

const miniatures = [
    {photo: Mini_Savory},
    {photo: Mini_Sweet},
    {photo: White_Sweater},
    {photo: Red_Sweater}
]

const mordechai = [
    {photo: Mordechai_1},
    {photo: Mordechai_2},
    {photo: Mordechai_3, caption: `I made the lenses by dipping my wire frames into a thin layer of Triple Thick`}
]

const projects = [
    [menorahsauraus, window, fabric_store, candy_store, tiny_paintings, miniatures, frank, mordechai]
]

const Crafts = () => {
    const [show, setShow] = useState(false)
    const [showCandyStore, setShowCandyStore] = useState(false)
    const handleClose= () => setShow(false);
    const handleCloseCandyStore = () => setShowCandyStore(false);
    const handleShowCandyStore = () => setShowCandyStore(true);

    return (
        <div className='carousels'>
            <img src={Candy_Store_Thumbnail_Texted}  onClick={handleShowCandyStore}/>

            <Modal show={showCandyStore} onHide={handleCloseCandyStore}>
                <Modal.Body>
                    <Carousel interval={false} slide={false} wrap={false}>
                        {candy_store.map((store, i) => {
                            return <Carousel.Item key={i}>
                                <img
                                    src={store.photo}
                                    alt="Candy store"
                                    className="thumbnail"
                                    />
                                <Carousel.Caption>
                                    <p>{store.caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}
                    </Carousel>
                </Modal.Body>
            </Modal>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Carousel interval={false} slide={false} wrap={false}>
                        {window.map((window, i) => {
                            return <Carousel.Item key={i}>
                                <img
                                    src={window.photo}
                                    alt="Window"
                                    className="thumbnail"
                                    />
                                <Carousel.Caption>
                                    <p>{window.caption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        })}
                    </Carousel>
                </Modal.Body>
            </Modal>
            <Carousel interval={false} slide={false} wrap={false}>
                {menorahsauraus.map((menorahsauraus, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={menorahsauraus.photo}
                            alt="Menorahsauraus"
                            className="thumbnail"

                            />
                    </Carousel.Item>
                })}
            </Carousel>


            <Carousel interval={false} slide={false} wrap={false}>
                {fabric_store.map((store, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={store.photo}
                            alt="Candy store"
                            className="thumbnail"
                            />
                        <Carousel.Caption>
                            <p>{store.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
            <Carousel interval={false} slide={false} wrap={false}>
                {tiny_paintings.map((painting, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={painting.photo}
                            alt="Candy store"
                            className="thumbnail"
                            />
                        <Carousel.Caption>
                            <p>{painting.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
            <Carousel interval={false} slide={false} wrap={false}>
                {miniatures.map((miniature, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={miniature.photo}
                            alt="Candy store"
                            className="thumbnail"
                            />
                        <Carousel.Caption>
                            <p>{miniature.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
            <Carousel interval={false} slide={false} wrap={false}>
                {frank.map((frank, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={frank.photo}
                            alt="Frank-n-furter"
                            className="thumbnail"
                            />
                        <Carousel.Caption>
                            <p>{frank.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                })}
            </Carousel>
            <Carousel interval={false} slide={false} wrap={false}>
                {mordechai.map((mordechai, i) => {
                    return <Carousel.Item key={i}>
                        <img
                            src={mordechai.photo}
                            alt="Candy store"
                            className="thumbnail"
                            />
                        <Carousel.Caption>
                            <p>{mordechai.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                })}
            </Carousel>
        </div>

    )
}
export default Crafts;
