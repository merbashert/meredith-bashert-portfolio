import React from 'react'

import pdf from '../Assets/Resumes/Meredith_Bashert_Programmer.pdf'
// import json from '../Assets/Resumes/Meredith_Bashert_Programmer_JSON.json'

const Resume = props => {
    return (
        <React.Fragment>
            <div className='resume-page'>
                <div className='resume-category' id='download'>
                    <h3 className='category-label' id='download-label'>Download Meredith</h3>
                    <h2>Meredith Bashert PDF Resume <a href={pdf} download className='download-button'>
                        <span className="lnr lnr-download"></span>
                    </a></h2>
                    <br/>
                </div>
                <div className='resume-category' id='visit'>
                    <h3 className='category-label'>Visit Meredith</h3>
                    <h2><a href="https://docs.google.com/document/d/1fxNG0481nBDrjlxCZx66_Uzm3Myq9irxapHwfcO2Xgg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" >
                        Google Doc Resume
                    </a></h2>
                    <h2><a href = 'https://www.linkedin.com/in/meredith-bashert/' target='_blank' rel="noopener noreferrer" ><ion-icon name="logo-linkedin"></ion-icon>LinkedIn</a></h2>
                    <h2><a href = 'https://github.com/merbashert' target='_blank' rel="noopener noreferrer" ><ion-icon name="logo-github"></ion-icon>Github</a></h2>
                </div>
                <br/>
                <div className='resume-category' id='email'>
                    <h3 className='category-label'>E-mail Meredith</h3>
                    <h2><a href="mailto:meredithbashert@gmail.com">meredithbashert@gmail.com</a></h2>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Resume
