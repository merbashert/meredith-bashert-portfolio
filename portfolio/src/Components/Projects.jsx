import React from 'react'
import crafty from '../Assets/MyCrafty.png'
import minifigure from '../Assets/Minifigure.png'
import brewdog from '../Assets/Brewdog.png'
import wanderlist from '../Assets/Wanderlist.png'
import date from '../Assets/DateNight.png'
import baseball from '../Assets/Baseball.png'
import sam from '../Assets/Sam.png'

import Image from 'react-bootstrap/Image';

const projects = [
    {
        id: 'crafty',
        title: 'My Crafty S*!%',
        url: 'http://mycraftybleep.meredithbashert.com/',
        image: crafty,
        description: 'Developed an app designed to keep track of my craft supplies, with separate sections for fabric, random craft supplies, zippers, and knitting needles.',
        technologies: 'ReactJS, React Router, React Bootstrap, PHP, SQL, JSX'
    },
    {
        id: 'minifigure',
        title: 'Minifigure Collector',
        url: 'http://minifigure-collector.herokuapp.com',
        image: minifigure,
        description: "Created an app designed to maintain a database of the Lego Minifigures in one's collection, as well as viewing all available Lego Minifigures.",
        technologies: 'HTML, CSS, NodeJS, MongoDB, Mongoose, Bootstrap, Express, EJS, Bcrypt'
    },
    {
        id: 'brewdog',
        title: 'BrewDog Browser',
        url: 'http://brewdogbrowser.meredithbashert.com/',
        image: brewdog,
        description: 'Developed a responsive API-based app that offers several different methods for searching and viewing the BrewDog beer database.',
        technologies: 'HTML, CSS, Javascript, jQuery, AJAX, NodeJS'
    },
    {
        id: 'baseball',
        title: 'Baseball Logger',
        url: 'http://baseball-logger.meredithbashert.com/',
        image: baseball,
        description: 'An app that has a pitch tracker and a random pitch generator for playing baseball video games. Built for my husband, and my first completely non-class project.',
        technologies: 'Javascript, HTML, CSS, jQuery'
    },
    {
        id: 'samstone',
        title: 'Sam Stone Dance',
        url: 'https://www.samstonedance.com/',
        image: sam,
        description: 'A personal portfolio for Sam Stone Dance.',
        technologies: 'WordPress API, React, React Router, Bootstrap, CSS Animation'
    },
    {
        id: 'wanderlist',
        title: 'Wanderlist',
        url: 'https://dream-destination-trackers.herokuapp.com/',
        image: wanderlist,
        description: 'Collaborated on an app for searching available flights, logging in and saving flights, and sharing on a community board about past flights.',
        technologies: 'AngularJS, Express, Node.js, Mongoose, bCrypt, Bootstrap'
    },
    {
        id: 'date',
        title: 'Date Night',
        url: 'https://itsdatenight.herokuapp.com/',
        image: date,
        description: 'Collaborated on an app designed to search the OMDb API and save the information found to a saved Date Night along with a date and a movie snack.',
        technologies: 'ReactJS, PHP, SQL, Javascript, JSX, Postgres'
    }
]

const Projects = props => {

    return (
        <div className='project-container'>
            {projects.map(project => (
                <div className='project' key={project.id}>
                    <h3>{project.title}</h3>
                    <div id={project.id}>
                        <a href={project.url} target='_blank' rel="noopener noreferrer" >
                            {project.url}
                            <Image src={project.image} alt={`${project.title} screenshot`} fluid/>
                        </a>
                        <div className='text'>
                            <div className='description'>
                                {project.description}
                            </div>
                            <div className='technologies'>
                                Technologies used: {project.technologies}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Projects
