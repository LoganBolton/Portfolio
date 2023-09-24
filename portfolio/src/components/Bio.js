import React from 'react';
import headshot from '../images/headshot.jpeg'; 


const Bio = () => {
  return (
      <div className="BioDiv flex gray-600 rounded-lg m-12 justify-center h-[30rem] items-center">
        <div className="bioImage w-[13rem] mr-5">
            <img className="rounded-3xl" src={headshot} />
        </div>
        <div className = "title text-left p-3 w-[35rem]">
            <div className="font-bold text-2xl">Logan Bolton</div>
            <div className="italic text-sm mb-3">Software Engineering Student - Auburn, AL</div>
            
            <div className="text-md">
              Hi! My name is Logan Bolton. I am a Junior majoring in Software Engineering and I am currently working full time as a co-op student at Auburn
              {' '}<a href="https://cws.auburn.edu/cws" target='_blank' className="text-blue-400 hover:underline">Campus Web Solutions</a>
              . I enjoy weight lifting, listening to music and being around friends. Once I graduate in May 2025, I plan to attend graduate school and
              earn a Master's degree in Computer Science. 
            </div>
        </div>
      </div>
  );
};

export default Bio;
