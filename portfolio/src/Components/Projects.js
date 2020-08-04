import React from 'react'
import crafty from '../Assets/MyCrafty.png'
import minifigure from '../Assets/Minifigure.png'
import brewdog from '../Assets/Brewdog.png'
import wanderlist from '../Assets/Wanderlist.png'
import date from '../Assets/DateNight.png'
import baseball from '../Assets/Baseball.png'

import Image from 'react-bootstrap/Image';


const Projects = props => {

    return (
        <div className='project-container'>
            <div className='project'>
                <h3>My Crafty S*!%</h3>
                <div id='crafty'>
                        <a href='http://mycraftybleep.herokuapp.com' target='_blank' rel="noopener noreferrer" >http://mycraftybleep.herokuapp.com
                    <Image src={crafty} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            Developed an app designed to keep track of my craft supplies, with separate sections for fabric, random craft supplies, and knitting needles.
                        </div>
                        <div id='technologies'>Technologies Used: ReactJS, React Router, React Bootstrap, PHP, SQL, JSX, Postgres</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>Minifigure Collector</h3>

                <div id='minifigure'>
                                <a href='http://minifigure-collector.herokuapp.com' target='_blank' rel="noopener noreferrer" >http://minifigure-collector.herokuapp.com
                    <Image src={minifigure} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            Created an app designed to maintain a database of the Lego Minifigures in one’s collection, as well as viewing all available Lego Minifigures.</div>
                        <div id='technologies'>Technologies used: HTML, CSS, NodeJS, MongoDB, Mongoose, Bootstrap, Express, EJS, Bcrypt</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>BrewDog Browser</h3>
                <div id='brewdog'>
                    <a href='https://merbashert.github.io/BrewDog_Browser/' target='_blank' rel="noopener noreferrer" >https://merbashert.github.io/BrewDog_Browser
                    <Image src={brewdog} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            Developed a responsive API-based app that offers several different methods for searching and viewing the BrewDog beer database.</div>
                        <div id='technologies'>Technologies used: HTML, CSS, Javascript, and jQuery, AJAX, NodeJS</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>Baseball Logger</h3>
                <div id='baseball'>
                        <a href='https://baseball-logger.netlify.com/' target='_blank' rel="noopener noreferrer" >https://baseball-logger.netlify.com/
                    <Image src={baseball} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            An app that has a pitch tracker and a random pitch generator for playing baseball video games.  Built for my husband!  My first complete non-class project!
                        <div id='technologies'>Technologies used: Javascript, HTML, CSS, and jQuery</div>
                    </div>
                </div>
            </div>
        </div>
            <div className='project'>
                <h3>Wanderlist</h3>
                <div id='wanderlist'>
                    <a href='https://dream-destination-trackers.herokuapp.com/' target='_blank' rel="noopener noreferrer" >https://dream-destination-trackers.herokuapp.com
                    <Image src={wanderlist} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            Collaborated on an app for searching available flights, logging in and saving flights, and sharing on a community board about past flights.
                        </div>
                        <div id='technologies'>Technologies used: AngularJS, Express, Node.js, Mongoose, bCrypt, Bootstrap</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>Date Night</h3>

                <div id='date'>
                <a href='https://itsdatenight.herokuapp.com/' target='_blank' rel="noopener noreferrer" >https://itsdatenight.herokuapp.com
                    <Image src={date} fluid/></a>
                    <div className='text>'>
                        <div id='description'>
                            Collaborated on an app designed to search the OMDb API and save the information found to a saved ‘Date Night” along with a date and a movie snack.
                        </div>
                        <div id='technologies'>Technologies Used: ReactJS, PHP, SQL, Javascript, JSX, Postgres</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects
