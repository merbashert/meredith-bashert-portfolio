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
                <a href='http://mycraftybleep.herokuapp.com'>http://mycraftybleep.herokuapp.com</a>
                <div id='crafty'>
                    <Image src={crafty} fluid/>
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
                <a href='http://minifigure-collector.herokuapp.com'>http://minifigure-collector.herokuapp.com</a>
                <div id='minifigure'>
                    <Image src={minifigure} fluid/>
                    <div className='text>'>
                        <div id='description'>
                            Created an app designed to maintain a database of the Lego Minifigures in one’s collection, as well as viewing all available Lego Minifigures.</div>
                        <div id='technologies'>Technologies used: HTML, CSS, NodeJS, MongoDB, Mongoose, Bootstrap, Express, EJS, Bcrypt</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>BrewDog Browser</h3>
                <a href='https://merbashert.github.io/BrewDog_Browser/'>https://merbashert.github.io/BrewDog_Browser</a>
                <div id='brewdog'>
                    <Image src={brewdog} fluid/>
                    <div className='text>'>
                        <div id='description'>
                            Developed a responsive API-based app that offers several different methods for searching and viewing the BrewDog beer database.</div>
                        <div id='technologies'>Technologies used: HTML, CSS, Javascript, and jQuery, AJAX, NodeJS</div>
                    </div>
                </div>
            </div>
            <div className='project'>
                <h3>Baseball Logger</h3>
                <a href='https://baseball-logger.netlify.com/'>https://baseball-logger.netlify.com/</a>
                <div id='baseball'>
                    <Image src={baseball} fluid/>
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
                <a href='https://dream-destination-trackers.herokuapp.com/'>https://dream-destination-trackers.herokuapp.com</a>
                <div id='wanderlist'>
                    <Image src={wanderlist} fluid/>
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
                <a href='https://itsdatenight.herokuapp.com/'>https://itsdatenight.herokuapp.com</a>
                <div id='date'>
                    <Image src={date} fluid/>
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
