import React from 'react';

import githubIcon from '../images/github.svg';
import emailIcon from '../images/EmailIcon.png';
import linkedInIcon from '../images/LinkedIcon.png';
import resumeIcon from '../images/ResumeIcon.png';


const Connect = () => {
    return (
        <div>
            <div className='techTitle font-bold text-white text-3xl mb-[1rem]'>
                <p>Connect with Me</p>
            </div>
            <div clasName = "">
                <ul className='flex flex-wrap items-center'>
                    <div>
                        <img className="icon" src={githubIcon}/>
                    </div>
                    <p>Github</p>

                </ul>
            </div>
            <div>
                <ul className='flex flex-wrap justify-evenly items-center'>

                    <div>
                        <img className="icon" src={linkedInIcon}/>
                    </div>
                    <p>LinkedIn</p>
                </ul>
            </div>
            <div>
                <div>
                    <img className="icon" src={resumeIcon}/>
                </div>
                <p>Resume</p>
            </div>
            <div>
                <div>
                    <img className="icon" src={emailIcon}/>
                </div>
                <p>Email</p>
            </div>
        </div>
    );
};

export default Connect;