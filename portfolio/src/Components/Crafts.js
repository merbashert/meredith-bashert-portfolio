import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Carousel from './Carousel'
import '../index.css'

import Menorahsauraus_1 from '../Assets/Crafts/Menorahsauraus.jpeg'
import Menorahsauraus_2 from '../Assets/Crafts/Menorahsauraus_lit.jpeg'
import Thumbnail_Menorah from '../Assets/Crafts/Thumbnail_Menorah.jpg'
import Window_Wide from '../Assets/Crafts/Window_Wide.jpg'
import Window_Close from '../Assets/Crafts/Window_Close.jpg'
import Thumbnail_Window from '../Assets/Crafts/Thumbnail_Window.jpg'
import Frank_1 from '../Assets/Crafts/Frank_1.jpg'
import Frank_3 from '../Assets/Crafts/Frank_3.jpg'
import Frank_4 from '../Assets/Crafts/Frank_4.jpg'
import Frank_5 from '../Assets/Crafts/Frank_5.jpg'
import Frank_6 from '../Assets/Crafts/Frank_6.jpg'
import Frank_7 from '../Assets/Crafts/Frank_7.jpg'
import Frank_8 from '../Assets/Crafts/Frank_8.jpg'
import Thumbnail_Frank from '../Assets/Crafts/Thumbnail_Frank.jpg'
import Candy_Store_1 from '../Assets/Crafts/Candy_Store_1.jpeg'
import Candy_Store_2 from '../Assets/Crafts/Candy_Store_2.jpeg'
import Candy_Store_3 from '../Assets/Crafts/Candy_Store_3.jpeg'
import Candy_Store_4 from '../Assets/Crafts/Candy_Store_4.jpeg'
import Candy_Store_5 from '../Assets/Crafts/Candy_Store_5.jpeg'
import Candy_Store_6 from '../Assets/Crafts/Candy_Store_6.jpeg'
import Thumbnail_Candy_Store from '../Assets/Crafts/Thumbnail_Candy_Store.jpg'
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
import Thumbnail_Fabric_Store from '../Assets/Crafts/Thumbnail_Fabric_Store.jpg'
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
import Thumbnail_Paintings from '../Assets/Crafts/Thumbnail_Paintings.jpg'
import Mordechai_1 from '../Assets/Crafts/Mordechai_1.jpeg'
import Mordechai_2 from '../Assets/Crafts/Mordechai_2.jpeg'
import Mordechai_3 from '../Assets/Crafts/Mordechai_3.jpeg'
import Thumbnail_Mordechai from '../Assets/Crafts/Thumbnail_Mordechai.jpg'
import Mini_Savory from '../Assets/Crafts/Mini_Savory.jpg'
import Mini_Sweet from '../Assets/Crafts/Mini_Sweet.jpeg'
import Red_Sweater from '../Assets/Crafts/Red_Sweater.jpg'
import White_Sweater from '../Assets/Crafts/White_Sweater.jpg'
import Thumbnail_Miniatures from '../Assets/Crafts/Thumbnail_Miniatures.jpg'




const menorahsauraus = [{photo: Menorahsauraus_1, comment: `It's a Carnivorous Menorahsauraus!`}, {photo: Menorahsauraus_2, comment: `It's a Carnivorous Menorahsauraus!`}]

const window = [
    {photo: Window_Wide, caption: `My office didn't have a window, so I made one!`},
    {photo: Window_Close}
]

const fabric_store = [
    {photo: Fabric_Store_1, caption: `1:12 Scale Dollhouse Fabric Store`},
    {photo: Fabric_Store_2, caption: `Everything is handmade except the peg board and the tiny embroidery hoop.`},
    {photo: Fabric_Store_3, caption: `I'm super proud of the dress form.`},
    {photo: Fabric_Store_4, caption: `I made tiny plastic sealed pillows!`},
    {photo: Fabric_Store_5, caption: `An upstairs area for customers to gather and knit together.`},
    {photo: Fabric_Store_6, caption: `It really spins!`},
    {photo: Fabric_Store_7, caption: `Notice the teeny tiny straight pins!`},
    {photo: Fabric_Store_8, caption: `I made the tiny rulers with transparent Shrinky Dinks.`},
    {photo: Fabric_Store_9, caption: `Tiny balls of yarn`},
    {photo: Fabric_Store_10, caption: `Tiny knitting magazines... and a Work in Progress!`},
    {photo: Fabric_Store_11, caption: `I knitted a tiny afghan for the couch.`},
    {photo: Fabric_Store_12, caption: `Finished quilt hanging on the wall.`}
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
    {photo: Candy_Store_2, caption: `Teeny gummies and candy sticks.`},
    {photo: Candy_Store_3, caption: `Gummy Bear Wall Art`},
    {photo: Candy_Store_4, caption: `Chocolate, chocolate, chocolate!`},
    {photo: Candy_Store_6, caption: `Yum.  Fudge.`},
    {photo: Candy_Store_5, caption: `Everything is handmade except the cash register and tiny glass jars!`},

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
    {photo: Octopus, caption: `Snack Food Juggler`},
    {photo: Star_Crossed_Lovers, caption:`Star-Crossed Lovers`},
    {photo: The_Flying_Koalas, caption:`The Flying Koalas`},
    {photo: Through_The_Looking_Glass_Quack, caption:`Through the Looking Glass: Quack`}

]

const miniatures = [
    {photo: White_Sweater},
    {photo: Red_Sweater},
    {photo: Mini_Savory},
    {photo: Mini_Sweet}
]

const mordechai = [
    {photo: Mordechai_1},
    {photo: Mordechai_2},
    {photo: Mordechai_3, caption: `I made the lenses by dipping my wire frames into a thin layer of Triple Thick`}
]

const projects = [
    {project:fabric_store, thumbnail:Thumbnail_Fabric_Store},
    {project:candy_store, thumbnail: Thumbnail_Candy_Store},
    {project:window, thumbnail: Thumbnail_Window},
    {project:tiny_paintings, thumbnail: Thumbnail_Paintings},
    {project:miniatures, thumbnail:Thumbnail_Miniatures},
    {project:menorahsauraus, thumbnail: Thumbnail_Menorah},
    {project:frank, thumbnail: Thumbnail_Frank},
    {project:mordechai, thumbnail: Thumbnail_Mordechai}
]

const Crafts = () => {
    const [show, setShow] = useState(false)
    const [project, setProject] = useState('')

    const handleClose= () => {
        setShow(false);
    }

    const handleShow = (project) => {
        setProject(project)
        setShow(true)
    };


    return (
        <div className='carousels'>
            <Modal show={show} onHide={handleClose} onExited={e => setProject('')}>
                <Modal.Body>
                    <Carousel project={project}/>
                </Modal.Body>
            </Modal>

            {
                projects.map((project, i) => {
                    return (
                        <div className='project' key={i}>
                            <img src={project.thumbnail}  onClick={e => handleShow(project)} className='thumbnail' alt={project.project}/>
                        </div>
                    )
                })
            }



        </div>

    )
}
export default Crafts;
