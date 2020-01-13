import React from 'react'
import Image from 'react-bootstrap/Image';
import pizza from '../Assets/Pizza.jpg'


const About = props => {

    return (
        <div className = 'about-me'>
        <Image src = {pizza}/>
        <div className = 'bio'>
        My name is Meredith and I love pizza.
        <br/><br/>
        End of About Me.
        <br/><br/>
        More? All right...
        <br/><br/>
        My name is Meredith Bashert, and I'm a web developer. In my previous life I was an Assistant Editor in reality television, where I worked on content for companies such as MTV, TLC, and the History Channel. I recently graduated from General Assembly's Software Engineering Immersive and I'm looking forward to lots of great career opportunities ahead.
        <br/><br/>
        And I still love pizza.
        </div>
        </div>
    )
}
export default About
