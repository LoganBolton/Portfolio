import React from 'react';
import '../css/Technologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import jsIcon from '../images/javascript.png';
import dotNetIcon from '../images/aspnet.svg';
import reactIcon from '../images/communityIcon_4g1uo0kd87c61.png';
import csharpIcon from '../images/c-sharp-c-icon-1822x2048-wuf3ijab.png';
const Technologies = () => {
  return (
    <div className="techList w-full">
      <div className='techTitle'>
        <p>Technologies</p>
      </div>
      <div className='tech-list'>
        <ul className='items-center'>
          <li className='technology bg-white p-4 rounded flex flex-col items-center'>
              <img className="icon" src={htmlIcon} alt="HTML icon" />
              <span>HTML</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={cssIcon}/>
              <span>CSS</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={jsIcon}/>
              <span>JavaScript</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={csharpIcon}/>
              <span>C#</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={dotNetIcon}/>
              <span>.Net</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={reactIcon}/>
              <span>React</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
