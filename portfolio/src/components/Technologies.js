import React from 'react';
import '../css/Technologies.css';

import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import jsIcon from '../images/javascript.png';
import dotNetIcon from '../images/aspnet.svg';
import reactIcon from '../images/communityIcon_4g1uo0kd87c61.png';
import csharpIcon from '../images/c-sharp-c-icon-1822x2048-wuf3ijab.png';
import jqueryIcon from '../images/jquery.png';
import pythonIcon from '../images/python.png';

const Technologies = () => {
  return (
    <div className="techList w-full">
      <div className='techTitle font-bold text-white text-3xl mb-[6rem]'>
        <p>Skills</p>
      </div>
      <div className='tech-list flex justify-center'>
        <ul className='flex flex-wrap justify-around items-center w-3/4'>
          <li className='technology bg-white p-4 rounded flex flex-col items-center'>
              <img className="icon" src={htmlIcon} alt="HTML icon"/>
              <span>HTML</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={cssIcon} alt = "CSS Icon"/>
              <span>CSS</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={jsIcon} alt = "JS Icon"/>
              <span>JavaScript</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={csharpIcon} alt = "C Sharp Icon"/>
              <span>C#</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={dotNetIcon} alt = "Dot Net Icon"/>
              <span>.Net</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={reactIcon} alt = "React Icon"/>
              <span>React</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={jqueryIcon} alt = "JQuery Icon"/>
              <span>JQuery</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <img className="icon" src={pythonIcon} alt = "Python Icon"/>
              <span>Python</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
