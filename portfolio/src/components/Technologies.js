import React from 'react';
import '../css/Technologies.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faGithub, faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const Technologies = () => {
  return (
    <div className="tech w-full">
      <div className='title'>
        <p>Technologies</p>
      </div>
      <div className='tech-list'>
        <ul className=''>
          <li className='technology bg-white p-4 rounded flex flex-col items-center'>
              <FontAwesomeIcon icon={faHtml5} />
              <span>HTML</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faCss3} />
              <span>CSS</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faJs} />
              <span>JavaScript</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faMicrosoft} />
              <span>C#</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faMicrosoft} />
              <span>.Net</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faReact} />
              <span>React</span>
          </li>
          <li className='technology bg-white p-4 rounded mt-2 flex flex-col items-center'>
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Technologies;
